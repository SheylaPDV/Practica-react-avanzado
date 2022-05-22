import { getAreAdvertsLoaded, getTags } from "./selectors";
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
  ADVERT_DELETED_SUCCESS,
  ADVERT_DELETED_FAILURE,
  ADVERT_DELETED_REQUEST,
  ADVERT_LOADED_REQUEST,
  ADVERT_CREATED_REQUEST,
  TAGS_LOADED_REQUEST,
  TAGS_LOADED_SUCCESS,
  TAGS_LOADED_FAILURE,
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

export const advertLoadedRequest = () => ({
  type: ADVERT_LOADED_REQUEST,
});

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
    const advertsLoaded = getAreAdvertsLoaded(getState());
    if (advertsLoaded) return;
    dispatch(advertLoadedRequest());
    try {
      const advert = await api.adverts.getAdvert(advertId);
      dispatch(advertLoadedSuccess(advert));
    } catch (error) {
      dispatch(advertLoadedFailure(error));
    }
  };
};

export const advertCreatedRequest = () => ({
  type: ADVERT_CREATED_REQUEST,
});

export const advertCreatedSuccess = (advert) => ({
  type: ADVERT_CREATED_SUCCESS,
  payload: advert,
});

export const advertCreatedFailure = (error) => ({
  type: ADVERT_CREATED_FAILURE,
  payload: error,
  error: true,
});

export const advertCreated = (advert) => {
  return async function (dispatch, _getState, { api, history }) {
    dispatch(advertCreatedRequest());
    try {
      const { id } = await api.adverts.createAdvert(advert);
      const createdAdvert = await api.adverts.getAdvert(id);
      dispatch(advertCreatedSuccess(createdAdvert));
      return createdAdvert;
    } catch (error) {
      dispatch(advertCreatedFailure(error));
    }
  };
};

export const advertsDeletedRequest = () => ({
  type: ADVERT_DELETED_REQUEST,
});

export const advertDeletedSuccess = (advert) => ({
  type: ADVERT_DELETED_SUCCESS,
  payload: advert,
});

export const advertDeletedFailure = (error) => ({
  type: ADVERT_DELETED_FAILURE,
  payload: error,
  error: true,
});

export const deletedAdvert = (advertId) => {
  return async function (dispatch, getState, { api, history }) {
    dispatch(advertsDeletedRequest());
    try {
      const deletedAdvert = await api.adverts.deleteAdvert(advertId);
      dispatch(advertDeletedSuccess(advertId));
    } catch (error) {
      dispatch(advertDeletedFailure(error));
    }
  };
};

export const tagsLoadedRequest = () => ({
  type: TAGS_LOADED_REQUEST,
});

export const tagsLoadedSuccess = (tags) => ({
  type: TAGS_LOADED_SUCCESS,
  payload: tags,
});

export const tagsLoadedFailure = (error) => ({
  type: TAGS_LOADED_FAILURE,
  payload: error,
  error: true,
});

export const tagsLoaded = () => {
  return async function (dispatch, getState, { api }) {
    const tagsLoaded = getTags(getState());
    if (tagsLoaded) return;
    dispatch(tagsLoadedRequest());
    try {
      const tags = await api.adverts.getTags();
      dispatch(tagsLoadedSuccess(tags));
    } catch (error) {
      dispatch(tagsLoadedFailure(error));
    }
  };
};

export const uiResetError = () => ({
  type: UI_RESET_ERROR,
});
