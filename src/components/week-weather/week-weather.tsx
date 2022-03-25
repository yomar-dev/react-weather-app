import WeatherCard from './weather-card/weather-card';

import { RootState } from '../../store';
import { useSelector } from 'react-redux';

import styles from './week-weather.module.scss';
import { ConsolidatedWeather } from '../../models';

function WeekWeather() {
  const { weekWeather, unit } = useSelector(
    (state: RootState) => state.weather
  );

  return (
    <section className={styles.container}>
      {weekWeather &&
        weekWeather.map((weather: ConsolidatedWeather) => {
          let { id, weather_state_abbr, max_temp, min_temp, applicable_date } =
            weather;
          let formattedDate = new Intl.DateTimeFormat('en', {
            weekday: 'short',
            day: '2-digit',
            month: 'short',
            timeZone: 'America/Bogota',
          }).format(new Date(applicable_date));

          return (
            <WeatherCard
              date={formattedDate}
              stateAbbr={weather_state_abbr}
              tempMax={max_temp}
              tempMin={min_temp}
              unit={unit}
              key={id}
            />
          );
        })}
    </section>
  );
}

export default WeekWeather;
