import { auth, adverts, defaultState } from "./reducers";
import {
  ADVERTS_LOADED,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
} from "./types";
// TEST PARA REDUCER AUTH
describe("auth", () => {
  test("should manage AUTH_LOGIN_SUCCESS action", () => {
    const action = {
      type: AUTH_LOGIN_SUCCESS,
    };
    // ESTADO INICIAL
    const initialState = false;
    // LLAMO AL REDUCER AUTH, Y LE PASO EL ESTADO INICIAL Y LÑA ACCION
    const result = auth(initialState, action);
    expect(result).toBe(true);
  });
  test("should manage AUTH_LOGOUT_SUCCESS action", () => {
    const action = {
      type: AUTH_LOGOUT_SUCCESS,
    };
    // ESTADO INICIAL
    const initialState = true;
    // LLAMO AL REDUCER AUTH, Y LE PASO EL ESTADO INICIAL Y LÑA ACCION
    const result = auth(initialState, action);
    expect(result).toBe(false);
  });
  test("should manage any action", () => {
    const action = {
      type: "ANY",
    };
    // ESTADO INICIAL
    const initialState = true;
    // LLAMO AL REDUCER AUTH, Y LE PASO EL ESTADO INICIAL Y LÑA ACCION
    const result = auth(initialState, action);
    expect(result).toBe(initialState);
  });
  test("should manage default state", () => {
    const action = {
      type: "ANY",
    };
    // ESTADO INICIAL
    const initialState = undefined;
    // LLAMO AL REDUCER AUTH, Y LE PASO EL ESTADO INICIAL Y LÑA ACCION
    const result = auth(initialState, action);
    expect(result).toBe(defaultState.auth);
  });
});

describe("adverts", () => {
  it("should manage ADVERTS_LOADED_SUCCESS action", () => {
    const action = { type: ADVERTS_LOADED, payload: [] };
  });
});
// ESTE TEST ESTA SIN TERMINAR!!!
