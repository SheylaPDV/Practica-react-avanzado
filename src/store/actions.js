import { ADVERTS_LOADED, AUTH_LOGIN, AUTH_LOGOUT } from "./types";

export const authLogin = () => ({
  type: AUTH_LOGIN,
  // payload recordar usuario?
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

// le paso los anuncios en el payload para que el reducer los pueda recoger y passaarlos a redux
export const advertsLoaded = (adverts) => ({
  type: ADVERTS_LOADED,
  payload: adverts,
});

// import {
//   AUTH_LOGIN_FAILURE,
//   AUTH_LOGIN_REQUEST,
//   AUTH_LOGIN_SUCCESS,
//   AUTH_LOGOUT,
//   ADVERTS_LOADED,
//   UI_RESET_ERROR,
//   AUTH_LOGOUT_SUCCESS,
// } from "./types";

// export const authLoginRequest = () => ({
//   type: AUTH_LOGIN_REQUEST,
// });

// export const authLoginSuccess = () => ({
//   type: AUTH_LOGIN_SUCCESS,
// });

// export const authLoginFailure = (error) => ({
//   type: AUTH_LOGIN_FAILURE,
//   payload: error,
//   error: true,
// });

// export const authLogin = () => {
//   return function (dispatch, getState) {};
// };

// export const authLogout = () => ({
//   type: AUTH_LOGOUT_SUCCESS,
//   meta: {
//     timestamp: new Date(),
//   },
// });

// export const advertsLoaded = (adverts) => ({
//   type: ADVERTS_LOADED,
//   payload: adverts,
// });

// export const uiResetError = () => ({
//   type: UI_RESET_ERROR,
// });
