import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import HeaderMegaMenu from "./NavbarUpdated";

const Layout = () => (
  <div>
    <HeaderMegaMenu />
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;
