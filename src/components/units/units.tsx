import { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { setUnit } from '../../store/features/weather/weather-slice';

import styles from './units.module.scss';
import WeatherUnits from '../../models/weather-units';

function Units() {
  const unit = useSelector((state: RootState) => state.weather.unit);
  const dispatch = useDispatch();

  const celsiusClasses =
    unit === WeatherUnits.Celsius ? styles['unit--selected'] : '';
  const fahrenheitClasses =
    unit === WeatherUnits.Fahrenheit ? styles['unit--selected'] : '';

  const handleUnit = (unit: WeatherUnits) => {
    dispatch(setUnit(unit));
  };

  return (
    <div className={styles.units}>
      <button
        className={[styles['unit'], `${celsiusClasses}`].join(' ')}
        onClick={() => handleUnit(WeatherUnits.Celsius)}
      >
        &#186;C
      </button>
      <button
        className={[styles['unit'], `${fahrenheitClasses}`].join(' ')}
        onClick={() => handleUnit(WeatherUnits.Fahrenheit)}
      >
        &#186;F
      </button>
    </div>
  );
}

export default Units;
