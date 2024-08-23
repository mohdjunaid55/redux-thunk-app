import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../reducers/country.reducer";
import {thunk} from "redux-thunk";  // Importing thunk from redux-thunk

const store = configureStore({
  reducer: {
    country: countryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV === "development" ? true: false,
});

export default store;
