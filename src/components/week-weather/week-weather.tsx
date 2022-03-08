import WeatherCard from './weather-card/weather-card';

import styles from './week-weather.module.scss';
import ConsolidatedWeather from '../../models/consolidated_weather';

interface Props {
  weekWeather: ConsolidatedWeather[];
}

function WeekWeather({ weekWeather }: Props) {
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
              tempMax={Math.round(max_temp)}
              tempMin={Math.round(min_temp)}
              key={id}
            />
          );
        })}
    </section>
  );
}

export default WeekWeather;
