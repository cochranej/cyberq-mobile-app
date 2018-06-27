import {UPDATE_TEMPERATURE_UNITS, UPDATE_DEMO_MODE} from './actionTypes';

export const updateTemperateUnits = (units) => {
  return {
    type: UPDATE_TEMPERATURE_UNITS,
    units: units
  };
};

export const updateDemoMode = (demoMode) => {
  return {
    type: UPDATE_DEMO_MODE,
    demoMode: demoMode
  };
};
