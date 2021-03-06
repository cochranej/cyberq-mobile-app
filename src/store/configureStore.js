import {createStore, combineReducers, compose} from "redux";
import temperaturesReducer from "./reducers/temperatures";
import settingsReducer from "./reducers/settings";

const rootReducer = combineReducers({
  temperatures: temperaturesReducer,
  settings: settingsReducer
});

let composeEnhancers = compose;
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers());
};

export default configureStore;