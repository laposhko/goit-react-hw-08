import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filterReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const filterConfig = {
  key: "filter",
  storage,
};
const persistedAuthReducer = persistReducer(authConfig, authReducer);
const persistedFilterReducer = persistReducer(filterConfig, filterReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: persistedFilterReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
