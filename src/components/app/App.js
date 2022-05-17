import React, { useState } from "react";
// prop-types :para validacion de tipos que llegan en las props de los componentes
import T from "prop-types";
// biblioteca popular para realizar enrutamiento y navegación(enrutamiento dinamico)
import { Routes, Route, Navigate } from "react-router-dom";
// importamos archivos de anuncios: pagina anuncio/pagina anuncios/pagina nuevo anuncio
import { AdvertPage, AdvertsPage, NewAdvertPage } from "../adverts";
// importamos pagina inicio sesion/ y requerir autorizacion
import { LoginPage, RequireAuth } from "../auth";
// importamos el contexto(proveedor de autenticacion)
import { AuthProvider } from "../auth/context";
// importamos pagina no existente
import NotFoundPage from "./NotFoundPage";
// importamos diseño
import Layout from "../layout";

// -------------------------------------------------------------
// import {authLogin, authLogout} from './store/actions'
// -------------------------------------------------------------

// recogemos del padre la propiedad isInitiallyLoged

function App({ isInitiallyLogged /*store */ }) {
  // console.log(
  //   " PASO 4 llegamos a App y le pasamos la prop:",
  //   isInitiallyLogged
  // );
  // inicializamos el estado en false
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);
  // console.log("PASO 5 isLogged vale:", isLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };
  const handleLogout = () => {
    setIsLogged(false);
  };

  const authProps = { isLogged, handleLogin, handleLogout };
  console.log(" PASO 6 La variable authProps:", authProps);

  return (
    // le pasamos authProps al contexto(AuthProvider)
    <AuthProvider {...authProps}>
      <Routes>
        <Route
          // añadimos ruta adverts
          path="/adverts"
          element={
            // que requiere autenticar si esta logado(true)
            // Para acceder a header y footer requiere autorizacion
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          {/* lo primero que se abre al hacer login es pagina anuncios */}
          <Route index element={<AdvertsPage />} />
          {/* /new te lleva a pagina nuevo anuncio */}
          <Route path="new" element={<NewAdvertPage />} />
          {/* /id del anuncio(detalle) te lleva a pagina ANUNCIO */}
          <Route path=":advertId" element={<AdvertPage />} />
        </Route>
        {/* /login te lleva a pagina login */}
        <Route path="/login" element={<LoginPage />} />
        {/* si no estas logado y vas a layout, te va a la pagina 404 */}
        <Route path="/404" element={<Layout />}>
          {/* pagina 404 */}
          <Route index element={<NotFoundPage />} />
        </Route>
        {/* / navega a anuncios */}
        <Route path="/" element={<Navigate to="/adverts" />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </AuthProvider>
  );
}

App.propTypes = {
  // indica que tiene que ser tipo booleano
  isInitiallyLogged: T.bool,
};
// 7
App.defaultProps = {
  isInitiallyLogged: false,
};
console.log("cuando hago login pasa esto:", App.defaultProps);
export default App;
