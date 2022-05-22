// export const getIsLogged = (state) => state.auth;
export const getAdverts = (state) => state.adverts.data;
// export const getUi = (state) => state.ui;
export const getAreAdvertsLoaded = (state) => state.adverts.loaded;
// export const getAdvert = (advertId) => (state) =>
//   state.adverts.data.find((advert) => advert.id === advertId);
export const getIsLogged = (state) => state.auth;

// export const getadvert = (state, advertId) =>
//   state.adverts.data.find(advert => advert.id: === tweetId);
// en este selector es donde estamos diciendo
// vamos a mezclar la info que nos viene la url
export const getAdvert = (advertId) => (state) =>
  // con la informacionq ue tenemos en redux/para devolver la info quer queremos ver en pantalla
  state.adverts.data.find((advert) => advert.id === advertId);

export const getUi = (state) => state.ui;
