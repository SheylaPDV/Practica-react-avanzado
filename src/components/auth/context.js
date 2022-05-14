import React, { useContext } from "react";
import T from "prop-types";

const AuthContext = React.createContext();

export const useAuthContext = () => {
  const authValue = useContext(AuthContext);
  console.log("la funbcion authValue vale:", authValue);
  return authValue;
};
//  Le pasamos al contexto las props(isLogged etc...) desde App y se las pasa a todos sus hijos
export const AuthProvider = ({ children, ...props }) => (
  <AuthContext.Provider value={props}>{children}</AuthContext.Provider>
);

export const AuthConsumer = AuthContext.Consumer;

AuthProvider.propTypes = {
  children: T.node,
};

AuthProvider.defaultProps = {
  children: null,
};

export default AuthContext;
