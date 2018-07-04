import {UPDATE_TEMPERATURE_UNITS, UPDATE_DEMO_MODE, UPDATE_REFRESH_RATE} from "../actions/actionTypes";
import {CENTIGRADE} from "../../constants/temperatureUnits";

const initialState = {
  demoMode: true,
  units: CENTIGRADE,
  refreshRate: 1
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEMPERATURE_UNITS:
      return {
          ...state,
        units: action.units
      };
    case UPDATE_DEMO_MODE:
      return {
          ...state,
        demoMode: action.demoMode
      };
    case UPDATE_REFRESH_RATE:
      return {
          ...state,
        refreshRate: action.refreshRate
      };
    default:
      return state;
  }
};

export default settingsReducer;

