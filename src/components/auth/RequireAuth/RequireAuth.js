// prop-types :para validacion de tipos que llegan en las props de los componentes
import T from "prop-types";
// biblioteca popular para realizar enrutamiento y navegación(enrutamiento dinamico)
// El hook useLocation, permite acceder al objeto location. Este objeto nos permitirá acceder a los atributos de la ruta, como es pathname , que es la ruta actual, search que es el query asociado a la ruta del tipo ?
import { Navigate, useLocation } from "react-router-dom";
// importamos para usar contexto de autentcacion
import { useAuthContext } from "../context";

const RequireAuth = ({ children }) => {
  // invocamos funcion para usart conmtexto de autenticacion
  const { isLogged } = useAuthContext();
  const location = useLocation();
  // si no esta logado, se le redirige a login desde donde esté
  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

RequireAuth.propTypes = {
  children: T.node,
};

export default RequireAuth;
