import { useEffect } from 'react';

import { RootState } from './store';
import { useSelector, useDispatch } from 'react-redux';

import {
  setCity,
  setLocation,
  setTodayWeather,
  setWeekWeather,
} from './store/features/weather/weather-slice';

import Sidebar from './components/sidebar/sidebar';
import Hightlights from './components/hightlights/hightlights';
import WeekWeather from './components/week-weather/week-weather';
import Footer from './components/footer/footer';

import styles from './App.module.scss';
import { PlaceLocation } from './models';

const API_URL = 'https://www.metaweather.com/api/location';
const PROXY_URL = 'https://afternoon-ridge-35420.herokuapp.com';

function App() {
  const { userCity, location, weatherToday, weekWeather } = useSelector(
    (state: RootState) => state.weather
  );
  const dispatch = useDispatch();

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
            dispatch(setCity(city));
            dispatch(setTodayWeather(weatherList[0]));
            dispatch(setWeekWeather(weatherList.slice(1)));
          }
        });
    }
  }, [location]);

  const searchCity = async (city: string) => {
    const req = await fetch(`${PROXY_URL}/${API_URL}/search/?query=${city}`);
    const response: PlaceLocation[] = await req.json();

    if (response.length) {
      dispatch(setLocation(response[0]));
    } else {
      console.log(`Sorry, weather forecast not available for ${city}!`);
    }
  };

  if (!weatherToday || !weekWeather) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.app}>
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
      <section className={styles.container}>
        <div className={styles.week}>
          <WeekWeather />
        </div>

        <div className={styles.hightlights}>
          {weatherToday && <Hightlights />}
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default App;
