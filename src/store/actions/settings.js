import * as ActionTypes from './actionTypes';

export const updateTemperateUnits = (units) => {
  return {
    type: ActionTypes.UPDATE_TEMPERATURE_UNITS,
    units: units
  };
};

export const updateDemoMode = (demoMode) => {
  return {
    type: ActionTypes.UPDATE_DEMO_MODE,
    demoMode: demoMode
  };
};

export const updateRefreshRate = (refreshRate) => {
  return {
    type: ActionTypes.UPDATE_REFRESH_RATE,
    refreshRate: refreshRate
  };
};
