import { useState } from 'react';

import Today from '../today/today';
import Search from '../search/search';

import styles from './sidebar.module.scss';

function Sidebar() {
  const [displayWeather, setDisplayWeather] = useState(true);

  return (
    <div className={styles.sidebar}>
      {displayWeather ? (
        <Today onDisplayWeather={setDisplayWeather} />
      ) : (
        <Search onDisplayWeather={setDisplayWeather} />
      )}
    </div>
  );
}

export default Sidebar;
