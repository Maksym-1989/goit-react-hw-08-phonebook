import axios from "axios";
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
} from "./phonebook-actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const getAllContacts = () => async (dispatch) => {
  dispatch(getAllContactsRequest());
  try {
    const { data } = await axios.get("/contacts");

    dispatch(getAllContactsSuccess(data));
  } catch (error) {
    dispatch(getAllContactsFailure(error));
  }
};

const addContact = (name, number) => async (dispatch) => {
  const contact = { name: name, number: number };

  dispatch(addNewContactRequested());
  try {
    const { data } = await axios.post("/contacts", contact);
    dispatch(addNewContactSuccess(data));
  } catch (error) {
    dispatch(addNewContactFailure(error));
  }
};

const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequested());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactFailure(error));
  }
};

export { addContact, deleteContact, getAllContacts };
