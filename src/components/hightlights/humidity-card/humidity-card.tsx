import styles from './humidity-card.module.scss';

interface Props {
  value: number;
  unit: string;
}

function HumidityCard({ value, unit }: Props) {
  return (
    <div className={styles.card}>
      <p className={styles.card__title}>Humidity</p>
      <div className={styles['card-body']}>
        <span className={styles['card-body__value']}>{value}</span>
        <span className={styles['card-body__unit']}>{unit}</span>
      </div>
      <footer className={styles['card-footer']}>
        <span className="material-icons">navigation</span>
        <span className={styles['card-footer__content']}>WSW</span>
      </footer>
    </div>
  );
}

export default HumidityCard;
