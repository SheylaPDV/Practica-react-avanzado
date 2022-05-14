import React from "react";
// El paquete react-dom proporciona métodos específicos del DOM que pueden ser utilizados en el nivel más alto de tu aplicación como una vía de escape del modelo de React si así lo necesitas.
import ReactDOM from "react-dom";
// Es el componente que utilizamos para crear nuestras rutas a otros páginas (componentes)
import { BrowserRouter as Router } from "react-router-dom";
// conecta con axios a api
import { configureClient } from "./api/client";
import storage from "./utils/storage";
// importa los estilos
import "./index.css";
// importa componente app
import App from "./components/app";
// importamos configureStore de redux
import configureStore from "./store";
// Aqui nos traemos de local storage el TOKEN
const accessToken = storage.get("auth");
console.log("PASO 1 Variable accesToken trae el token:", accessToken);

// 1  despues de dirige a api/client y ejecuta la funcion configureClient()
configureClient({ accessToken });
const store = configureStore();
window.store = store;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* metemos como propiedad en el padre el token */}
      <App isInitiallyLogged={!!accessToken} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);