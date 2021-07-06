import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getAllContactsRequest,
  getAllContactsSuccess,
  getAllContactsFailure,
  addNewContactRequested,
  addNewContactSuccess,
  addNewContactFailure,
  deleteContactRequested,
  deleteContactSuccess,
  deleteContactFailure,
  onChangeFilter,
} from "./phonebook-actions";

const loading = createReducer(false, {
  [getAllContactsRequest]: () => true,
  [getAllContactsSuccess]: () => false,
  [getAllContactsFailure]: () => false,
  [addNewContactRequested]: () => true,
  [addNewContactSuccess]: () => false,
  [addNewContactFailure]: () => false,
  [deleteContactRequested]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactFailure]: () => false,
});

const handleError = (_, action) => action.payload;
const clearError = () => null;

const error = createReducer(null, {
  [getAllContactsRequest]: clearError,
  [getAllContactsFailure]: handleError,
  [addNewContactRequested]: clearError,
  [addNewContactFailure]: handleError,
  [deleteContactRequested]: clearError,
  [deleteContactFailure]: handleError,
});

const itemsReducer = createReducer([], {
  [getAllContactsSuccess]: (_, action) => action.payload,
  [addNewContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filterReducer = createReducer("", {
  [onChangeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading,
  error,
});

export default contactsReducer;
