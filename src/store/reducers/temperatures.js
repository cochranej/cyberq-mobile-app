import {UPDATE_SENSOR_1_TEMP, UPDATE_SENSOR_2_TEMP, UPDATE_SENSOR_3_TEMP} from "../actions/actionTypes";

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
    case UPDATE_SENSOR_1_TEMP:
      return {
          ...state,
        sensor1: {
          ...state.sensor1,
          temp: state.sensor1.temp + (0.08 * action.increment)
        }
      };
    case UPDATE_SENSOR_2_TEMP:
      return {
        ...state,
        sensor2: {
          ...state.sensor2,
          temp: state.sensor2.temp + (0.05 * action.increment)
        }
      };
    case UPDATE_SENSOR_3_TEMP:
      return {
        ...state,
        sensor3: {
          ...state.sensor3,
          temp: state.sensor3.temp + (0.03 * action.increment)
        }
      };
    default:
      return state;
  }
};

export default temperaturesReducer;