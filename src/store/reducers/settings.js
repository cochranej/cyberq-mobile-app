import {UPDATE_TEMPERATURE_UNITS, UPDATE_DEMO_MODE} from "../actions/actionTypes";
import {CENTIGRADE} from "../../constants/temperatureUnits";

const initialState = {
  units: CENTIGRADE,
  demoMode: true
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
    default:
      return state;
  }
};

export default settingsReducer;

