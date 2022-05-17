import { createStore, combineReducers, applyMiddleware } from "redux";
import * as reducers from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";

// Middelewware

function logger(store) {
  return function (next) {
    return function (action) {
      console.log("before action", action, store.getStore());
      // le paso la acccion al sguiente de la cadena
      next(action);
      console.log("after action", action, store.getStore());
    };
  };
}
// nos creamos el store apsandole el reducer
// Es obligatorio pasa rl reducer
//
const configureStore = ({ preloadedState }) => {
  // metemos los middlewares en un array
  const middlewares = [logger];
  const store = createStore(
    combineReducers(reducers),
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares)) //los metemos haciendo speed  operator
  );
  return store;
};
export default configureStore;
