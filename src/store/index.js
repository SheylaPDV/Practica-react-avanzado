import { createStore } from "redux";

import reducer from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";

// nos creamos el store apsandole el reducer
// Es obligatorio pasa rl reducer
//
const configureStore = ({ preloadedState }) => {
  const store = createStore(reducer, preloadedState, composeWithDevTools());
  return store;
};
export default configureStore;
