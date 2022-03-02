import styles from './hightlight-card.module.scss';

function HightlightCard() {
  return (
    <div className={styles.card}>
      <p className={styles.card__title}>Wind status</p>
      <div className={styles['card-body']}>
        <span className={styles['card-body__value']}>7</span>
        <span className={styles['card-body__unit']}>mph</span>
      </div>
      <footer className={styles['card-footer']}>
        <span className="material-icons">navigation</span>
        <span className={styles['card-footer__content']}>WSW</span>
      </footer>
    </div>
  );
}

export default HightlightCard;
