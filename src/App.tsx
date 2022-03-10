import { useState, useEffect } from 'react';

import Sidebar from './components/sidebar/sidebar';
import Hightlights from './components/hightlights/hightlights';
import WeekWeather from './components/week-weather/week-weather';
import Footer from './components/footer/footer';

import styles from './App.module.scss';
import PlaceLocation from './models/location';
import ConsolidatedWeather from './models/consolidated_weather';

const API_URL = 'https://www.metaweather.com/api/location';
const PROXY_URL = 'https://afternoon-ridge-35420.herokuapp.com';

function App() {
  const [city, setCity] = useState('');
  const [userCity, setUserCity] = useState('');
  const [location, setLocation] = useState<PlaceLocation>(null);
  const [weatherToday, setWeatherToday] = useState<ConsolidatedWeather>(null);
  const [weekWeather, setWeekWeather] = useState<ConsolidatedWeather[]>([]);

  useEffect(() => {
    searchCity('bogotá');
  }, []);

  useEffect(() => {
    if (userCity) {
      searchCity(userCity);
    }
  }, [userCity]);

  useEffect(() => {
    if (location) {
      fetch(`${PROXY_URL}/${API_URL}/${location.woeid}`)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            const city = data.title;
            const weatherList = data.consolidated_weather;
            setCity(city);
            setWeatherToday(weatherList[0]);
            setWeekWeather(weatherList.slice(1));
          }
        });
    }
  }, [location]);

  const searchCity = async (city: string) => {
    const req = await fetch(`${PROXY_URL}/${API_URL}/search/?query=${city}`);
    const response: PlaceLocation[] = await req.json();

    if (response.length) {
      setLocation(response[0]);
    } else {
      console.log(`Sorry, weather forecast not available for ${city}!`);
    }
  };

  return (
    <div className={styles.app}>
      <aside className={styles.sidebar}>
        {weatherToday && (
          <Sidebar
            city={city}
            weather={weatherToday}
            updateUserCity={setUserCity}
          />
        )}
      </aside>
      <section className={styles.container}>
        <div className={styles.week}>
          <WeekWeather weekWeather={weekWeather} />
        </div>

        <div className={styles.hightlights}>
          {weatherToday && <Hightlights weather={weatherToday} />}
        </div>

        <Footer />
      </section>
    </div>
  );
}

export default App;
