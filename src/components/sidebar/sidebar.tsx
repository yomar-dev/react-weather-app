import { useState } from 'react';

import Today from '../today/today';
import Search from '../search/search';

import styles from './sidebar.module.scss';
import ConsolidatedWeather from '../../models/consolidated_weather';

interface Props {
  city: string;
  weather: ConsolidatedWeather;
}

function Sidebar({ city, weather }: Props) {
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
        <Search onDisplayWeather={setDisplayWeather} />
      )}
    </div>
  );
}

export default Sidebar;
