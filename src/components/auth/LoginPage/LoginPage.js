import React from "react";
import { useDispatch, useSelector } from "react-redux";

import LoginForm from "./LoginForm";
import { authLogin } from "../../../store/actions";
import { getUi } from "../../../store/selectors";

function LoginPage() {
  const dispatch = useDispatch();
  const { isLoading, error, resetError } = useSelector(getUi);

  const handleSubmit = (credentials) => {
    dispatch(authLogin(credentials));
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
      {isLoading && <p>...login in nodepop</p>}
      {error && (
        <div onClick={resetError} style={{ color: "red" }}>
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
