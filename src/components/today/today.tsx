import { RootState } from '../../store';
import { useSelector } from 'react-redux';

import styles from './today.module.scss';
import { getWeatherImage } from '../../utils/weatherImages';

import WeatherUnits from '../../models/weather-units';
import { convertToFahrenheit } from '../../utils/units';

interface Props {
  onDisplayWeather: (boolean) => void;
}

function Today({ onDisplayWeather }: Props) {
  const { unit, city, weatherToday } = useSelector(
    (state: RootState) => state.weather
  );

  const { weather_state_name, the_temp, applicable_date, weather_state_abbr } =
    weatherToday;

  const todayTemp =
    unit === WeatherUnits.Fahrenheit
      ? convertToFahrenheit(the_temp).toFixed(1)
      : the_temp.toFixed(1);

  let formattedDate = new Intl.DateTimeFormat('en', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    timeZone: 'America/Bogota',
  }).format(new Date(applicable_date));

  const searchButtonHandler = () => {
    onDisplayWeather(false);
  };

  return (
    <div className={styles.sidebar}>
      <header className={styles['sidebar-header']}>
        <button
          className={styles['sidebar-header__button']}
          onClick={searchButtonHandler}
        >
          Seach for places
        </button>
        <span className="material-icons">my_location</span>
      </header>

      <section className={styles['sidebar-main']}>
        <figure className={styles['sidebar-main__figure']}>
          <img
            src={getWeatherImage(weather_state_abbr)}
            alt="Today weather image"
            className={styles['sidebar-main__image']}
          />
        </figure>
        <h2 className={styles['sidebar-main__temperature']}>
          {todayTemp}
          <span className={styles['sidebar-main__temperature-unit']}>
            {unit === WeatherUnits.Celsius ? '°C' : '°F'}
          </span>
        </h2>
        <p className={styles['sidebar-main__weather-state']}>
          {weather_state_name}
        </p>
      </section>

      <footer className={styles['sidebar-footer']}>
        <p className={styles['sidebar-footer__date']}>
          Today • {formattedDate}
        </p>
        <p className={styles['sidebar-footer__place']}>
          <span className="material-icons">place</span> {city}
        </p>
      </footer>
    </div>
  );
}

export default Today;
