import {UPDATE_SENSOR_1_TEMP, UPDATE_SENSOR_2_TEMP, UPDATE_SENSOR_3_TEMP} from "./actionTypes";

export const updateSensorOneTemp = (increment) => {
  return {
    type: UPDATE_SENSOR_1_TEMP,
    increment: increment
  };
};

export const updateSensorTwoTemp = (increment) => {
  return {
    type: UPDATE_SENSOR_2_TEMP,
    increment: increment
  };
};

export const updateSensorThreeTemp = (increment) => {
  return {
    type: UPDATE_SENSOR_3_TEMP,
    increment: increment
  };
};