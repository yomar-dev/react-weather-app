import styles from './today.module.scss';
import showerImg from '../../assets/images/shower.png';

function Today() {
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
          15
          <span className={styles['sidebar-main__temperature-unit']}>
            &#8451;
          </span>
        </h2>
        <p className={styles['sidebar-main__weather-state']}>Shower</p>
      </section>

      <footer className={styles['sidebar-footer']}>
        <p className={styles['sidebar-footer__date']}>Today • Fri, 5 Jun</p>
        <p className={styles['sidebar-footer__place']}>
          <span className="material-icons">place</span> Helsinki
        </p>
      </footer>
    </div>
  );
}

export default Today;
