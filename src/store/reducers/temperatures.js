import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  sensor1: {
    name: "Grill Probe",
    temp: 103.6,
    highAlarm: "999",
    highAlarmActive: false,
    lowAlarm: "0",
    lowAlarmActive: false
  },
  sensor2: {
    name: "Food Probe 1",
    temp: 48.3,
    highAlarm: "999",
    highAlarmActive: false,
    lowAlarm: "0",
    lowAlarmActive: false
  },
  sensor3: {
    name: "Food Probe 2",
    temp: 82.9,
    highAlarm: "999",
    highAlarmActive: false,
    lowAlarm: "0",
    lowAlarmActive: false
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
    case ActionTypes.UPDATE_HIGH_ALARM:
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          highAlarm: action.alarm.replace(/[^0-9]/g, '')
        }
      };
    case ActionTypes.UPDATE_HIGH_ALARM_ACTIVE:
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          highAlarmActive: action.active
        }
      };
    case ActionTypes.UPDATE_LOW_ALARM:
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          lowAlarm: action.alarm.replace(/[^0-9]/g, '')
        }
      };
    case ActionTypes.UPDATE_LOW_ALARM_ACTIVE:
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          lowAlarmActive: action.active
        }
      };
    default:
      return state;
  }
};

export default temperaturesReducer;