import {UPDATE_TEMPERATURE_UNITS} from './actionTypes';

export const updateTemperateUnits = (units) => {
  return {
    type: UPDATE_TEMPERATURE_UNITS,
    units: units
  };
};