import {UPDATE_TEMPERATURE_UNITS} from "../actions/actionTypes";
import {CENTIGRADE} from "../../constants/temperatureUnits";

const initialState = {
  units: CENTIGRADE
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEMPERATURE_UNITS:
      return {
          ...state,
        units: action.units
      };
    default:
      return state;
  }
};

export default settingsReducer;

