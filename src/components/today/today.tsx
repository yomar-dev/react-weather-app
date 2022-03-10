import styles from './today.module.scss';
import ConsolidatedWeather from '../../models/consolidated_weather';
import { getWeatherImage } from '../../utils/weatherImages';

interface Props {
  city: string;
  weather: ConsolidatedWeather;
  onDisplayWeather: (boolean) => void;
}

function Today({ city, weather, onDisplayWeather }: Props) {
  const { weather_state_name, the_temp, applicable_date, weather_state_abbr } =
    weather;

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
          {the_temp.toFixed(1)}
          <span className={styles['sidebar-main__temperature-unit']}>
            &#8451;
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
