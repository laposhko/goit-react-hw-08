import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";
// import { toast } from "react-toastify";
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        // toast.success("User is registered");
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        // toast.success("You are in!");
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = {
          name: null,
          email: null,
        };
        // toast.error("You are logged out");
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
