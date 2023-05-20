import { Outlet, NavLink } from "react-router-dom";
import s from "./Layout.module.css";

// const activeMenu = ({ isActive }) => (isActive ? "activeMenu" : "");

const Layout = () => {
  return (
    <div className={s.nav}>
      <div>
        <NavLink to={"/about"} className={s.item}>
          About
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={"/posts"} className={s.item}>
          Posts
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};
export default Layout;
