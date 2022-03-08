import styles from './hightlight-card.module.scss';

interface Props {
  title: string;
  value: number;
  unit: string;
}

function HightlightCard({ title, value, unit }: Props) {
  return (
    <div className={styles.card}>
      <p className={styles.card__title}>{title}</p>
      <div className={styles['card-body']}>
        <span className={styles['card-body__value']}>{Math.round(value)}</span>
        <span className={styles['card-body__unit']}>{unit}</span>
      </div>
    </div>
  );
}

export default HightlightCard;
