import {CENTIGRADE} from "../constants/temperatureUnits";

export const getTemperature = (temp, units) => {
  const tempNumber = Number(temp);
  const temperature = units === CENTIGRADE ? tempNumber : tempNumber * 1.8 + 32;
  return temperature;
};

