import snow from '../assets/images/weather/sn.png';
import sleet from '../assets/images/weather/sl.png';
import hail from '../assets/images/weather/h.png';
import thunderstorm from '../assets/images/weather/t.png';
import heavyRain from '../assets/images/weather/hr.png';
import lightRain from '../assets/images/weather/lr.png';
import showers from '../assets/images/weather/s.png';
import heavyCloud from '../assets/images/weather/hc.png';
import clear from '../assets/images/weather/c.png';

const weatherImages = {
  sn: snow,
  sl: sleet,
  h: hail,
  t: thunderstorm,
  hr: heavyRain,
  lr: lightRain,
  s: showers,
  hc: heavyCloud,
  c: clear,
};

const getWeatherImage = (key: string) => {
  return weatherImages[key];
};

export { getWeatherImage };
