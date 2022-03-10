import { useState } from 'react';

import Today from '../today/today';
import Search from '../search/search';

import styles from './sidebar.module.scss';
import ConsolidatedWeather from '../../models/consolidated_weather';

interface Props {
  city: string;
  weather: ConsolidatedWeather;
  updateUserCity: (city: string) => void;
}

function Sidebar({ city, weather, updateUserCity }: Props) {
  const [displayWeather, setDisplayWeather] = useState(true);

  return (
    <div className={styles.sidebar}>
      {displayWeather ? (
        <Today
          city={city}
          weather={weather}
          onDisplayWeather={setDisplayWeather}
        />
      ) : (
        <Search
          onDisplayWeather={setDisplayWeather}
          onUserCity={updateUserCity}
        />
      )}
    </div>
  );
}

export default Sidebar;
