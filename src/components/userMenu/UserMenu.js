import React from "react";
import { connect } from "react-redux";
import { getAuthUserName } from "../../redux/auth/auth-selectors";
import bender from "../../img/333.png";
import { logOut } from "../../redux/auth/auth-operation";
import css from "./UserMenu.module.css";
import PropTypes from "prop-types";

const UserMenu = ({ name, onLogout }) => {
  return (
    <div className={css.usermenu_container}>
      <img src={bender} alt="" width="40" className={css.usermenu_avatar} />

      <p className={css.username}>Welcome, {name} </p>

      <button type="button" className={css.btn} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

UserMenu.propTypes = {
  onLogout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  name: getAuthUserName(state),
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
