import { createStore, combineReducers } from "redux";
import * as reducers from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";

// nos creamos el store apsandole el reducer
// Es obligatorio pasa rl reducer
//
const configureStore = ({ preloadedState }) => {
  const store = createStore(
    combineReducers(reducers),
    preloadedState,
    composeWithDevTools()
  );
  return store;
};
export default configureStore;
