import { authLogin, authLoginRequest } from "./actions";
import { AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS } from "./types";

describe("authLoginRequest", () => {
  test("should return an AUTH_LOGIN_REQUEST action", () => {
    const expectedAction = {
      type: AUTH_LOGIN_REQUEST,
    };
    const result = authLoginRequest();
    expect(result).toEqual(expectedAction);
  });
});

describe("authLogin", () => {
  const credentials = {
    email: "shey@gmail.com",
    password: "1234",
  };
  const action = authLogin(credentials);
  const dispatch = jest.fn();
  const api = {
    auth: {},
  };
  const history = {
    location: {},
    replace: jest.fn(),
  };
  describe("when login api resolves", () => {
    test("should follow the login flow", async () => {
      api.auth.login = jest.fn().mockResolvedValue();
      await action(dispatch, undefined, { api, history });
      expect(dispatch).toHaveBeenNthCalledWith(1, { type: AUTH_LOGIN_REQUEST });
      expect(api.auth.login).toHaveBeenCalledWith(credentials);
      expect(dispatch).toHaveBeenNthCalledWith(2, { type: AUTH_LOGIN_SUCCESS });
      expect(history.replace).toHaveBeenCalledWith("/");
    });
  });
});
