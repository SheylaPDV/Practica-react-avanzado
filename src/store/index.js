import { createStore, combineReducers } from "redux";
import * as reducers from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
const configureStore = (preloadedState) => {
  const store = createStore(
    combineReducers(reducers),
    preloadedState,
    composeWithDevTools()
  );
  return store;
};

export default configureStore;

// EJEMPLOS DE Middelewware

// function logger(store) {
//   return function (next) {
//     return function (action) {
//       console.log("before action", action, store.getStore());
//       // le paso la acccion al sguiente de la cadena
//       next(action);
//       console.log("after action", action, store.getStore());
//     };
//   };
// }

// const timestamp = () => (next) => (action) => {
//   const newAction = {
//     ...action,
//     meta: {
//       ...action.meta,
//       timestamp: new Date(),
//     },
//   };
//   next(newAction);
// };

// EJEMPLO DE MIDDLEWARE CON MODULO REDUX THUNK(SOLO ADMITE FUNCIONES)

// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     // Si la accion es una funcion :
//     if (typeof action === "function") {
//       // la ejecutamos y pasamnos parametros (action es la funcion del fichero actions)
//       action(dispatch, getState);
//     }
//     // solo sabe poasar funciones, pasamos al siguiente de la cadena el resultaod
//     return next(action);
//   };

// nos creamos el store apsandole el reducer
// Es obligatorio pasa rl reducer
// Pasamos la cadena de middlewares aqui

// const configureStore = ({ preloadedState }) => {
//   // metemos los middlewares en un array(el que ponemos mas a la derecha., es el que estra pegado al dispatch)
//   const middlewares = [logger];
//   const store = createStore(
//     combineReducers(reducers),
//     preloadedState,
//     composeWithDevTools(applyMiddleware(...middlewares)) //los metemos haciendo speed  operator
//   );
//   return store;
// };
// export default configureStore;
