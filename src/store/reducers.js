import {
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
  ADVERTS_LOADED,
  UI_RESET_ERROR,
} from "./types";
// fruncion que va a tenert elñ valor incial del estado
const defaultState = {
  auth: false,
  adverts: [],
  ui: {
    isLoading: false,
    error: null,
  },
};

// // Reducer es una funcion que recibe el estado actual y la accion
// // Necesitamos establecer un valor incial
// const reducer = (state = defaultStore, action) => {
//   switch (action.type) {
//     // acciones que vamos a manejar
//     case AUTH_LOGIN:
//       // generamos una copia del estado(express operator) y lo ponemos a true
//       return { ...state, auth: true };
//     case AUTH_LOGOUT:
//       // generamos una copia del estado(express operator) y lo ponemos a false
//       return { ...state, auth: false };
//     case ADVERTS_LOADED:
//       // cuando lleguen los anuncios en la accion, devolvemos todo el estado, y sobreescribiendo adverts
//       return { ...state, adverts: action.payload };
//     default:
//       return state;
//   }
// };

export const auth = (state = defaultState.auth, action) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return true;
    case AUTH_LOGOUT_SUCCESS:
      return false;
    default:
      return state;
  }
};

export const adverts = (state = defaultState.adverts, action) => {
  switch (action.type) {
    case ADVERTS_LOADED:
      return action.payload;
    default:
      return state;
  }
};
// esta funcuioin tgiene que devolver el estado de los de arriba
// creamos este objeto como estado final(estado global)
// ha que ponerle al estado el defaultState porque si fuese el state undefined petaria
// const reducer = (state = defaultStore, action) => {
//   return {
//     auth: auth(state.auth, action),
//     adverts: adverts(state.adverts, action),
//   };
// };

export const ui = (state = defaultState.ui, action) => {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return { ...state, isLoading: true, error: null };
    case AUTH_LOGIN_SUCCESS:
      return { ...state, isLoading: false };
    case AUTH_LOGIN_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case UI_RESET_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};
// Le paso un objeto con la forma de mi estado
// Con este metodo combineReducers hacemos lo mismo que la funcion reducer pero mas facil

// FORMA 1

// const reducer = (state = defaultState, action) => {
//   return {
//     auth: auth(state.auth, action),
//     tweets: tweets(state.tweets, action),
//     ui: ui(state.ui, action),
//   };
// };

// FORMA 2

// const reducer = combineReducers({
//   auth: auth,
//   tweets: tweets,
//   ui: ui,
// });

// FORMA 3

// const reducer = combineReducers({
//   auth,
//   tweets,
//   ui,
// });
