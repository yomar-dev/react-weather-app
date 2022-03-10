import styles from './search.module.scss';

interface Props {
  onDisplayWeather: (boolean) => void;
}

function Search({ onDisplayWeather }: Props) {
  const closeSearchHandler = () => {
    onDisplayWeather(true);
  };

  return (
    <div className={styles.search}>
      <form className={styles.form}>
        <div className={styles.form__field}>
          <span className="material-icons">search</span>
          <input
            type="search"
            placeholder="search location"
            className={styles.form__input}
          />
        </div>
        <button className={styles.form__button}>Search</button>
      </form>

      <ul className={styles.list}>
        <li className={styles.list__item}>London</li>
        <li className={styles.list__item}>Barcelona</li>
        <li className={styles.list__item}>Ámsterdam</li>
      </ul>

      <button className={styles.search__icon} onClick={closeSearchHandler}>
        <span className="material-icons">close</span>
      </button>
    </div>
  );
}

export default Search;
