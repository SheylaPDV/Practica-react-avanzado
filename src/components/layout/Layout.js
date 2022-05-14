// Esto permite a la interfaz anidada mostrar las rutas hijas cuando son renderizadas.
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
