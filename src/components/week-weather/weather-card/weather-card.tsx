import React from 'react';

import styles from './weather-card.module.scss';
import showerImg from '../../../assets/images/shower.png';

interface Props {
  title: string;
  image?: string;
  tempMax: number;
  tempMin: number;
}

function WeatherCard({ title, image = showerImg, tempMax, tempMin }: Props) {
  return (
    <div className={styles.card}>
      <p className={styles.card__title}>{title}</p>
      <figure className={styles['card__image-container']}>
        <img
          src={image}
          alt={`${title} weather`}
          className={styles.card__image}
        />
      </figure>
      <footer className={styles['card-footer']}>
        <span className={styles['card-footer__temp-max']}>{tempMax}°C</span>
        <span className={styles['card-footer__temp-min']}>{tempMin}°C</span>
      </footer>
    </div>
  );
}

export default WeatherCard;
