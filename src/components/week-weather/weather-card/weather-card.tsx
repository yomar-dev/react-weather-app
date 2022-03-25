import styles from './weather-card.module.scss';
import WeatherUnits from '../../../models/weather-units';
import { convertToFahrenheit } from '../../../utils/units';
import { getWeatherImage } from '../../../utils/weatherImages';

interface Props {
  date: string;
  stateAbbr: string;
  tempMax: number;
  tempMin: number;
  unit: WeatherUnits;
}

function WeatherCard({ date, stateAbbr = 't', tempMax, tempMin, unit }: Props) {
  const getTemp = (temp: number) => {
    return unit === WeatherUnits.Fahrenheit
      ? Math.round(convertToFahrenheit(temp)) + '°F'
      : Math.round(temp) + '°C';
  };

  return (
    <div className={styles.card}>
      <p className={styles.card__title}>{date}</p>
      <figure className={styles['card__image-container']}>
        <img
          src={getWeatherImage(stateAbbr)}
          alt={`${date} weather`}
          className={styles.card__image}
        />
      </figure>
      <footer className={styles['card-footer']}>
        <span className={styles['card-footer__temp-max']}>
          {getTemp(tempMax)}
        </span>
        <span className={styles['card-footer__temp-min']}>
          {getTemp(tempMin)}
        </span>
      </footer>
    </div>
  );
}

export default WeatherCard;
