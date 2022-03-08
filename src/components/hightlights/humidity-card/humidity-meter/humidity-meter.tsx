import styles from './humidity-meter.module.scss';

interface Props {
  value: number;
}

function HumidityMeter({ value }: Props) {
  return (
    <div className={styles.meter}>
      <div className={styles['meter__scale']}>
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <meter
        min="0"
        max="100"
        value={value}
        className={styles['meter__indicator']}
      >
        {`${value.toFixed(1)}%`}
      </meter>
      <footer className={styles['meter__footer']}>%</footer>
    </div>
  );
}

export default HumidityMeter;
