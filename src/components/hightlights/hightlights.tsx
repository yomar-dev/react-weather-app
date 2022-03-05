import HightlightCard from './hightlight-card/hightlight-card';
import HumidityCard from './humidity-card/humidity-card';
import WindStatusCard from './wind-status-card/wind-status-card';

import styles from './hightlights.module.scss';
import ConsolidatedWeather from '../../models/consolidated_weather';

interface Props {
  weather: ConsolidatedWeather;
}

function Hightlights({ weather }: Props) {
  const { wind_speed, humidity, visibility, air_pressure } = weather;
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
