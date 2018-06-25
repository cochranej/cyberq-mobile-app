import {createStore, combineReducers} from "redux";
import temperaturesReducer from "./reducers/temperatures";

const rootReducer = combineReducers({
  temperatures: temperaturesReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;