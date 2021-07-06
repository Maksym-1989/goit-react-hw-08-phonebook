import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../redux/auth/auth-operation";
import PropTypes from "prop-types";

class registerPage extends Component {
  state = { name: "", email: "", password: "" };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <label className="label">
            Name
            <input
              className="input"
              type="text"
              minLength="2"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChange}
              value={name}
            />
          </label>
          <label className="label">
            Email
            <input
              className="input"
              placeholder="sophie@example.com"
              minLength="5"
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
              minLength="6"
              required
              onChange={this.handleChange}
              value={password}
            />
          </label>
          <button type="submit" className="btn">
            Register
          </button>
        </form>
      </div>
    );
  }
}

registerPage.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(registerPage);
