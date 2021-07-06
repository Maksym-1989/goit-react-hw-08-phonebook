import { createSelector } from "@reduxjs/toolkit";

const getItemsSelector = (state) => state.contacts.items;
const filterSelector = (state) => state.contacts.filter;
const errorSelector = (state) => state.contacts.error;
const loadingSelector = (state) => state.contacts.loading;

const getFilteredContactsSelector = createSelector(
  [getItemsSelector, filterSelector],
  (contacts, filter) =>
    contacts.filter((contatct) =>
      contatct.name.toLowerCase().includes(filter.toLowerCase())
    )
);

export {
  getItemsSelector,
  filterSelector,
  errorSelector,
  loadingSelector,
  getFilteredContactsSelector,
};
