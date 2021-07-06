import React from "react";
import PropTypes from "prop-types";
import css from "./ContactList.module.css";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/phonebook/phonebook-operation";
import {
  errorSelector,
  getFilteredContactsSelector,
} from "../../redux/phonebook/phonebook-selectors";

const ContactList = ({ error, deleteContact, contacts }) => {
  const filteredContacts = contacts;

  return (
    <ul>
      {!error ? (
        filteredContacts.map(({ name, number, id }) => (
          <li key={id} className={css.item}>
            <p className={css.text}>
              {name}: {number}
            </p>
            <button
              className="btn-list"
              type="button"
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <p>Server error</p>
      )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.object.isRequired]),
};

const mapStateToProps = (state) => ({
  error: errorSelector(state),
  contacts: getFilteredContactsSelector(state),
});

const mapDispatchToProps = { deleteContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
