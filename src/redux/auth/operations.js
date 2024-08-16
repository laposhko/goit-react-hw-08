import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// axios.defaults.baseURL = "https://connections-api.herokuapp.com";
axios.defaults.baseURL = "http://localhost:3000";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";
// Utility to add JWT
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      console.log(userData);
      // const response = await axios.post("/users/signup", userData);
      const response = await axios.post("/auth/register", userData);
      console.log(response);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("users/login", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    console.log(axios.defaults.headers.common.Authorization);
    const response = await axios.post("users/logout");
    clearAuthHeader();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const savedToken = state.auth.token;
    console.log(savedToken);
    setAuthHeader(savedToken);
    const response = await axios.get("users/current");
    return response.data;
  },
  {
    condition(_, thunkAPI) {
      const state = thunkAPI.getState();
      return state.auth.token !== null;
    },
  }
);
