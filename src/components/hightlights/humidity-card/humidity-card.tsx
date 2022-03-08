import styles from './humidity-card.module.scss';
import HumidityMeter from './humidity-meter/humidity-meter';

interface Props {
  value: number;
  unit: string;
}

function HumidityCard({ value, unit }: Props) {
  return (
    <div className={styles.card}>
      <p className={styles.card__title}>Humidity</p>
      <div className={styles['card-body']}>
        <span className={styles['card-body__value']}>{value.toFixed(1)}</span>
        <span className={styles['card-body__unit']}>{unit}</span>
      </div>
      <footer className={styles['card-footer']}>
        <div className={styles['card-footer__content']}>
          <HumidityMeter value={value} />
        </div>
      </footer>
    </div>
  );
}

export default HumidityCard;
