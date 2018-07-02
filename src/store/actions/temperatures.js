import * as ActionTypes from "./actionTypes";

export const updateSensorTemperature = (increment, key, multiplier) => {
  return {
    type: ActionTypes.UPDATE_SENSOR_TEMPERATURE,
    increment: increment,
    key: key,
    multiplier: multiplier
  };
};

export const updateHighAlarm = (key, alarm) => {
  return {
    type: ActionTypes.UPDATE_HIGH_ALARM,
    key: key,
    alarm: alarm
  };
};

export const updateHighAlarmActive = (key, active) => {
  return {
    type: ActionTypes.UPDATE_HIGH_ALARM_ACTIVE,
    key: key,
    active: active
  };
};

export const updateLowAlarm = (key, alarm) => {
  return {
    type: ActionTypes.UPDATE_LOW_ALARM,
    key: key,
    alarm: alarm
  };
};

export const updateLowAlarmActive = (key, active) => {
  return {
    type: ActionTypes.UPDATE_LOW_ALARM_ACTIVE,
    key: key,
    active: active
  };
};