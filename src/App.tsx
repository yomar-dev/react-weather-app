import { useState, useEffect } from 'react';

import Today from './components/today/today';
import Hightlights from './components/hightlights/hightlights';
import WeekWeather from './components/week-weather/week-weather';

import styles from './App.module.scss';
import PlaceLocation from './models/location';
import ConsolidatedWeather from './models/consolidated_weather';

const API_URL = 'https://www.metaweather.com/api/location';
const PROXY_URL = 'https://afternoon-ridge-35420.herokuapp.com';

function App() {
  const [city, setCity] = useState('');
  const [location, setLocation] = useState<PlaceLocation>(null);
  const [weatherToday, setWeatherToday] = useState<ConsolidatedWeather>(null);
  const [weekWeather, setWeekWeather] = useState<ConsolidatedWeather[]>([]);

  useEffect(() => {
    fetch(`${PROXY_URL}/${API_URL}/search/?query=london`)
      .then((response) => response.json())
      .then((data: PlaceLocation[]) => {
        if (data.length) {
          setLocation(data[0]);
        }
      });
  }, []);

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

  return (
    <div className={styles.app}>
      <aside className={styles.sidebar}>
        {weatherToday && <Today city={city} weather={weatherToday} />}
      </aside>
      <section className={styles.container}>
        <div className={styles.week}>
          <WeekWeather weekWeather={weekWeather} />
        </div>
        <div className={styles.hightlights}>
          {weatherToday && <Hightlights weather={weatherToday} />}
        </div>
      </section>
    </div>
  );
}

export default App;
