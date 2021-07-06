import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./ContactForm.module.css";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import {
  addContact,
  getAllContacts,
} from "../../redux/phonebook/phonebook-operation";
import {
  getItemsSelector,
  loadingSelector,
} from "../../redux/phonebook/phonebook-selectors";

class ContactForm extends Component {
  state = { name: "", number: "" };

  componentDidMount() {
    this.props.getAllContacts();
  }

  handleChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name } = this.state;

    if (this.props.contacts.some((element) => element.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.props.addContact(this.state.name, this.state.number);

    this.setState({ name: "", number: "" });
  };

  render() {
    const { loading } = this.props;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label className={css.label}>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>

          <label className={css.label}>
            Number
            <input
              className={css.input}
              type="tel"
              name="number"
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
              value={this.state.number}
            />
          </label>

          <button type="submit" className="btn">
            Add Contact
          </button>
        </form>
        <div className={css.spinerContainer}>
          {loading ? (
            <Loader
              type="Circles"
              color="#00BFFF"
              height={50}
              width={50}
              timeout={10000}
              className={css.spiner}
            />
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  getAllContacts: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = (state) => {
  return {
    contacts: getItemsSelector(state),
    loading: loadingSelector(state),
  };
};

const mapDispatchToProps = { addContact, getAllContacts };

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
