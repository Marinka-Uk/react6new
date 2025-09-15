import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "../statusFilter";


export const initialState = {
  status: statusFilters.all,
};

 const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changedFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changedFilter } = filterSlice.actions;

