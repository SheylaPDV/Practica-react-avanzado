import axios from "axios";

const client = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/api`,
});
// 5 Establece encabezado de autorizacion
const setAuthorizationHeader = (token) => {
  // 6 metemos en la cabecera Authorization, el token que nos llega con Bearer{token que traemos}
  client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  console.log(
    "PASO 3 LLamamos a la funcion setAuthorizationHEader y Metemos token en Authorization que esta en el headers "
  );
};

const removeAuthorizationHeader = () => {
  delete client.defaults.headers.common["Authorization"];
};

client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
    return Promise.reject({
      message: error.response.statusText,
      statusCode: error.response.status,
      ...error.response.data,
    });
  }
);
export const configureClient = ({ accessToken }) => {
  // 2 funcion donde entra el token

  console.log(
    "PASO 2 despues en configureClient se comprueba si hay token:",
    accessToken
  );
  if (accessToken) {
    // 3 comprueba si hay token

    setAuthorizationHeader(accessToken); // 4 si hay token: llama a la funcion setAuthorizationHeader y le pasa el token a la funcion
  }
};

export const resetClient = () => {
  removeAuthorizationHeader();
};

export default client;
