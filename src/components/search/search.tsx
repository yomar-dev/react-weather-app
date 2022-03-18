import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { setUserCity } from '../../store/features/weather/weather-slice';

import styles from './search.module.scss';

interface Props {
  onDisplayWeather: (displayWeather: boolean) => void;
}

function Search({ onDisplayWeather }: Props) {
  const dispatch = useDispatch();

  const [city, setCity] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    const userCity = city.toLowerCase();
    onUserCity(userCity);
  };

  const handleInputSearch = (event) => {
    setCity(event.target.value);
  };

  const closeSearchHandler = () => {
    onDisplayWeather(true);
  };

  const onUserCity = (city: string) => {
    dispatch(setUserCity(city));
    setCity('');
  };

  return (
    <div className={styles.search}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.form__field}>
          <span className="material-icons">search</span>
          <input
            type="search"
            value={city}
            placeholder="search location"
            onChange={handleInputSearch}
            className={styles.form__input}
          />
        </div>
        <button className={styles.form__button}>Search</button>
      </form>

      <ul className={styles.list}>
        <li className={styles.list__item} onClick={() => onUserCity('london')}>
          London
        </li>
        <li
          className={styles.list__item}
          onClick={() => onUserCity('barcelona')}
        >
          Barcelona
        </li>
        <li
          className={styles.list__item}
          onClick={() => onUserCity('new york')}
        >
          New York
        </li>
      </ul>

      <button className={styles.search__icon} onClick={closeSearchHandler}>
        <span className="material-icons">close</span>
      </button>
    </div>
  );
}

export default Search;
