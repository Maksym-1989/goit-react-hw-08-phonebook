import React from "react";
import { connect } from "react-redux";
import AuthNav from "../authNav/AuthNav";
import Navigation from "../navigation/Navigation";
import UserMenu from "../userMenu/UserMenu";
import { getIsAuth } from "../../redux/auth/auth-selectors";
import css from "./AppBar.module.css";

const AppBar = ({ isLoggedIn }) => {
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: getIsAuth(state),
});

export default connect(mapStateToProps)(AppBar);
