import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../redux/auth/auth-operation";
import PropTypes from "prop-types";

class LoginPage extends Component {
  state = { email: "", password: "" };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <label className="label">
            Email
            <input
              className="input"
              placeholder="sophie@example.com"
              minlength="5"
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              onChange={this.handleChange}
              value={email}
            />
          </label>
          <label className="label">
            Password
            <input
              className="input"
              type="password"
              name="password"
              minlength="6"
              required
              onChange={this.handleChange}
              value={password}
            />
          </label>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
