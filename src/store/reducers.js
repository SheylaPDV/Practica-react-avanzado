import { ADVERTS_LOADED, AUTH_LOGIN, AUTH_LOGOUT } from "./types";

// fruncion que va a tenert elñ valor incial del estado
const defaultStore = {
  auth: false,
  adverts: [],
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

const auth = (state = defaultStore.auth, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
};

const adverts = (state = defaultStore.adverts, action) => {
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
const reducer = (state = defaultStore, action) => {
  return {
    auth: auth(state.auth, action),
    adverts: adverts(state.adverts, action),
  };
};

export default reducer;
