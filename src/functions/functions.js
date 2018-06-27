import {CENTIGRADE} from "../constants/temperatureUnits";

export const getTemperature = (temp, units) => {
  let temperature = units === CENTIGRADE ? temp : temp * 1.8 + 32;
  return temperature.toFixed(1);
};
