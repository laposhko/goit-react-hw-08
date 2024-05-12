import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";
const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading.fetching;
export const selectError = (state) => state.contacts.error;
// export const selectNameFilter = (state) => state.filter.name;
export const selectContactLoader = (state) => state.contacts.loading.adding;
export const selectContactDeleter = (state) => state.contacts.loading.deleting;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
