import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "../auth/operations";
export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    error: false,
    loading: {
      fetching: false,
      adding: false,
      deleting: false,
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading.fetching = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.error = false;

        state.loading.fetching = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading.fetching = false;
      })
      .addCase(addContact.pending, (state) => {
        state.loading.adding = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading.adding = false;
        state.items.push(action.payload);
        toast.success("Successfully added");
      })
      .addCase(addContact.rejected, (state) => {
        state.loading.adding = false;
        toast.error("Request error.Please try again");
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.loading.deleting = action.meta.arg;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading.deleting = false;
        toast.success("Successfully deleted");
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading.deleting = false;
        toast.error("Request error. Please try again");
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
      }),
});
export const contactsReducer = contactsSlice.reducer;
