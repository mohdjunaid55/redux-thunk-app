import { createReducer } from "@reduxjs/toolkit";
import { GET_COUNTRY } from "../constants/country.constant";

const initialState = [];

const countryReducer = createReducer(initialState, (builder) => {
  builder.addCase(GET_COUNTRY, (state, action) => {
    return action.payload;
  });
});

export default countryReducer;
