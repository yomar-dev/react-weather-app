import { RootState } from '../../store';
import { useSelector } from 'react-redux';

import HightlightCard from './hightlight-card/hightlight-card';
import HumidityCard from './humidity-card/humidity-card';
import WindStatusCard from './wind-status-card/wind-status-card';

import styles from './hightlights.module.scss';

function Hightlights() {
  const { weatherToday } = useSelector((state: RootState) => state.weather);

  const { wind_speed, humidity, visibility, air_pressure } = weatherToday;

  return (
    <section className={styles.hightlights}>
      <h2 className={styles.hightlights__title}>Today’s Hightlights </h2>

      <div className={styles['hightlights-body']}>
        <div className={styles['hightlights-row']}>
          <WindStatusCard value={wind_speed} unit="mph" />
          <HumidityCard value={humidity} unit="%" />
        </div>
        <div className={styles['hightlights-row']}>
          <HightlightCard title="Visibility" value={visibility} unit="miles" />
          <HightlightCard title="Air Pressure" value={air_pressure} unit="mb" />
        </div>
      </div>
    </section>
  );
}

export default Hightlights;
