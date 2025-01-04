import { createSlice } from "@reduxjs/toolkit";

import * as thunks from "./thunks";
import * as thunkHandlers from "./thunkHandlers";
import * as actionHandlers from "./actionHandlers";

const initialState = {
  data: [],
  filters: {
    year: "",
    month: "",
  },
  availableFilters: {
    yearFilters: [],
  },
  loadingState: {
    isAvailableFilterLoading: false,
  },
};

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    setFilters: actionHandlers.setFilters,
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        thunks.getAvailableFilter.pending,
        thunkHandlers.getAvailableFilterPending
      )
      .addCase(
        thunks.getAvailableFilter.fulfilled,
        thunkHandlers.getAvailableFilterFulFilled
      );
  },
});

export const chartActions = chartSlice.actions;

export default chartSlice.reducer;
