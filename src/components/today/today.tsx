import styles from './today.module.scss';
import showerImg from '../../assets/images/shower.png';
import ConsolidatedWeather from '../../models/consolidated_weather';

interface Props {
  city: string;
  weather: ConsolidatedWeather;
}

function Today({ city, weather }: Props) {
  const { weather_state_name, the_temp, applicable_date } = weather;

  let formattedDate = new Intl.DateTimeFormat('en', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    timeZone: 'America/Bogota',
  }).format(new Date(applicable_date));

  return (
    <div className={styles.sidebar}>
      <header className={styles['sidebar-header']}>
        <button className={styles['sidebar-header__button']}>
          Seach for places
        </button>
        <span className="material-icons">my_location</span>
      </header>

      <section className={styles['sidebar-main']}>
        <figure className={styles['sidebar-main__figure']}>
          <img
            src={showerImg}
            alt="Today weather image"
            className={styles['sidebar-main__image']}
          />
        </figure>
        <h2 className={styles['sidebar-main__temperature']}>
          {the_temp}
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
