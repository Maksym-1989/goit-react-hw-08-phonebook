import React, { Component, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
import css from "./App.module.css";

import AppBar from "../appBar/AppBar";
import routes from "../../routes/routes";
import { getCurrentUser } from "../../redux/auth/auth-operation";
import { connect } from "react-redux";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";

const HomePage = lazy(() =>
  import("../../pages/HomePage" /* webpackChunkName: "home-page" */)
);

const ContactsPage = lazy(() =>
  import("../../pages/ContactPage" /* webpackChunkName: "contacts-page" */)
);

const RegisterPage = lazy(() =>
  import("../../pages/RegisterPage" /* webpackChunkName: "register-page" */)
);

const LoginPage = lazy(() =>
  import("../../pages/LoginPage" /* webpackChunkName: "login-page" */)
);

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div className="container">
        <AppBar />
        <Suspense
          fallback={
            <Loader
              type="Circles"
              color="#00BFFF"
              height={130}
              width={130}
              timeout={10000}
              className={css.spiner}
            />
          }
        >
          <Switch>
            <PublicRoute exact path={routes.home} component={HomePage} />
            <PublicRoute
              restricted
              exact
              path={routes.login}
              component={LoginPage}
              redirectTo={routes.contacts}
            />
            <PublicRoute
              exact
              restricted
              path={routes.register}
              component={RegisterPage}
              redirectTo={routes.contacts}
            />
            <PrivateRoute
              exact
              path={routes.contacts}
              component={ContactsPage}
              redirectTo={routes.login}
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
