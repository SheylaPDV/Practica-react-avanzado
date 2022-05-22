import { auth } from "./reducers";
import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_SUCCESS } from "./types";

describe("auth", () => {
  it("should manage AUTH_LOGIN_SUCCESS action", () => {
    const action = {
      type: AUTH_LOGIN_SUCCESS,
    };
    const initialState = false;
    const result = auth(initialState, action);
    expect(result).toBe(true);
  });
  it("should manage AUTH_LOGOUT_SUCCESS action", () => {
    const action = {
      type: AUTH_LOGOUT_SUCCESS,
    };
    const initialState = true;
    const result = auth(initialState, action);
    expect(result).toBe(false);
  });
  it("should manage any action", () => {
    const action = {
      type: "ANY",
    };
    const initialState = true;
    const result = auth(initialState, action);
    expect(result).toBe(initialState);
  });
});
