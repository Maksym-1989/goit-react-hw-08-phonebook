import React from "react";
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import route from "../../routes/routes";

const AuthNav = () => {
  return (
    <div>
      <NavLink
        exact
        to={route.register}
        className={css.nav_link}
        activeClassName={css.active_nav_link}
      >
        Sign up
      </NavLink>

      <NavLink
        exact
        to={route.login}
        className={css.nav_link}
        activeClassName={css.active_nav_link}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
