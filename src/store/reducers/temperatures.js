import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  sensor1: {
    name: "Grill Probe",
    temp: 103.6,
    highAlarm: 150.0,
    lowAlarm: 80.0
  },
  sensor2: {
    name: "Food Probe 1",
    temp: 48.3,
    highAlarm: 53.5,
    lowAlarm: 0.0
  },
  sensor3: {
    name: "Food Probe 2",
    temp: 82.9,
    highAlarm: 90.0,
    lowAlarm: 0.0
  }
};

const temperaturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_SENSOR_TEMPERATURE:
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          temp: state[action.key].temp + (action.multiplier * action.increment)
        }
      };
    default:
      return state;
  }
};

export default temperaturesReducer;