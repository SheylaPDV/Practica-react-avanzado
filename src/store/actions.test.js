// PRIMER PASO, IMPORTAR LAS COSAS QUE QUEREMOS TESTEAR
import { authLoginRequest, advertsLoaded } from "./actions";
import { ADVERTS_LOADED, AUTH_LOGIN_REQUEST } from "./types";

// CREAR UN BLOQUE CON LA FUNCION DESCRIBE(PARA ORGANIZAR)
describe("authLoginRequest", () => {
  // DESCRIPCION DE LO QUE DEBERIA RETORNAR LA FUNCION AUTHLOGINREQUEST()
  test("Should return an AUTH_LOGIN_REQUEST action", () => {
    // FUNCION DONDE HACEMOS NUESTRO TEST
    // ESTA ES LA ACCION QUE ESPERO QUE ESTA FUNCION ME DEVUELVA UN OBJETO
    const expectedAction = {
      type: AUTH_LOGIN_REQUEST,
    };
    // ESTE ES EL RESULTADO QUE ME DA LA FUNCION CVUANDO YO LA LLAMO
    const result = authLoginRequest();
    // PARA HACER EL TEST
    expect(result).toEqual(expectedAction);
  });
});

describe("advertsLoaded", () => {
  test("Should return an ADVERTS_LOADED action", () => {
    const adverts = "adverts";
    const expectedAction = {
      type: ADVERTS_LOADED,
      payload: adverts,
    };
    const result = advertsLoaded(adverts);
    expect(result).toEqual(expectedAction);
  });
});
