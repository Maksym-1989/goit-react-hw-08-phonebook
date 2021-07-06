import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuth } from "../..//redux/auth/auth-selectors";
import css from "./Navigation.module.css";

const Navigation = ({ getIsAuth }) => {
  return (
    <nav className={css.nav}>
      <NavLink
        exact
        to="/"
        className={css.nav_link}
        activeClassName={css.active_nav_link}
      >
        Home
      </NavLink>
      {getIsAuth && (
        <NavLink
          exact
          to="/contacts"
          className={css.nav_link}
          activeClassName={css.active_nav_link}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  getIsAuth: getIsAuth(state),
});

export default connect(mapStateToProps)(Navigation);
