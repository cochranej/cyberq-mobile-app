import * as ActionTypes from "./actionTypes";

export const updateSensorTemperature = (increment, key, multiplier) => {
  return {
    type: ActionTypes.UPDATE_SENSOR_TEMPERATURE,
    increment: increment,
    key: key,
    multiplier: multiplier
  };
};