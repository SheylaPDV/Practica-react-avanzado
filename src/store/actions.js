import { getAreAdvertsLoaded, getAdvert } from "./selectors";
import {
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
  ADVERTS_LOADED_FAILURE,
  ADVERTS_LOADED_REQUEST,
  ADVERTS_LOADED_SUCCESS,
  ADVERT_CREATED_FAILURE,
  ADVERT_CREATED_SUCCESS,
  ADVERT_LOADED_FAILURE,
  ADVERT_LOADED_SUCCESS,
  UI_RESET_ERROR,
} from "./types";

export const authLoginRequest = () => ({
  type: AUTH_LOGIN_REQUEST,
});

export const authLoginSuccess = () => ({
  type: AUTH_LOGIN_SUCCESS,
});
export const authLoginFailure = (error) => ({
  type: AUTH_LOGIN_FAILURE,
  payload: error,
  error: true,
});

export const authLogin = (credentials) => {
  return async function (dispatch, _getState, { api, history }) {
    dispatch(authLoginRequest());
    try {
      await api.auth.login(credentials);
      dispatch(authLoginSuccess());
      // redirect...
      const from = history.location.state?.from?.pathname || "/";
      history.replace(from);
    } catch (error) {
      dispatch(authLoginFailure(error));
    }
  };
};

export const authLogoutSuccess = () => ({
  type: AUTH_LOGOUT_SUCCESS,
});

export const authLogout = () => {
  return function (dispatch, _getState, { api }) {
    return api.auth.logout().then(() => {
      dispatch(authLogoutSuccess());
    });
  };
};

export const advertsLoadedRequest = () => ({
  type: ADVERTS_LOADED_REQUEST,
});

export const advertsLoadedSuccess = (adverts) => ({
  type: ADVERTS_LOADED_SUCCESS,
  payload: adverts,
});

export const advertsLoadedFailure = (error) => ({
  type: ADVERTS_LOADED_FAILURE,
  payload: error,
  error: true,
});

// le paso los anuncios en el payload para que el reducer los pueda recoger y passaarlos a redux
export const advertsLoaded = () => {
  return async function (dispatch, getState, { api }) {
    const advertsLoaded = getAreAdvertsLoaded(getState());
    if (advertsLoaded) return;

    dispatch(advertsLoadedRequest());
    try {
      const adverts = await api.adverts.getLatestAdverts();
      console.log(adverts);
      dispatch(advertsLoadedSuccess(adverts));
    } catch (error) {
      dispatch(advertsLoadedFailure(error));
    }
  };
};

export const advertLoadedSuccess = (advert) => ({
  type: ADVERT_LOADED_SUCCESS,
  payload: advert,
});

export const advertLoadedFailure = (error) => ({
  type: ADVERT_LOADED_FAILURE,
  payload: error,
  error: true,
});

export const advertLoaded = (advertId) => {
  return async function (dispatch, getState, { api, history }) {
    const advertLoaded = getAdvert(advertId)(getState());
    if (advertLoaded) return;

    // dispatch(tweetLoadedRequest());
    try {
      const advert = await api.adverts.getAdvert(advertId);
      dispatch(advertLoadedSuccess(advert));
    } catch (error) {
      dispatch(advertLoadedFailure(error));
    }
  };
};

// export const advertCreatedSuccess = advert => ({
//   type: ADVERT_CREATED_SUCCESS,
//   payload: advert,
// });

// export const advertCreatedFailure = error => ({
//   type: ADVERT_CREATED_FAILURE,
//   payload: error,
//   error: true,
// });

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
