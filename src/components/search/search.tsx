import styles from './search.module.scss';

function Search() {
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

      <button className={styles.search__icon}>
        <span className="material-icons">close</span>
      </button>
    </div>
  );
}

export default Search;
