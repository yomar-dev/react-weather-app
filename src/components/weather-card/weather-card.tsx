import styles from './weather-card.module.scss';
import showerImg from '../../assets/images/shower.png';

function WeatherCard() {
  return (
    <div className={styles.card}>
      <p className={styles.card__title}>Tomorrow</p>
      <figure className={styles['card__image-container']}>
        <img
          src={showerImg}
          alt="Tomorrow's weather"
          className={styles.card__image}
        />
      </figure>
      <footer className={styles['card-footer']}>
        <span className={styles['card-footer__temp-max']}>16°C</span>
        <span className={styles['card-footer__temp-min']}>11°C</span>
      </footer>
    </div>
  );
}

export default WeatherCard;
