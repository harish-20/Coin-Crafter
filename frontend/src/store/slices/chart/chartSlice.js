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
    isFilteredDataLoading: false,
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
      // get available filter
      .addCase(
        thunks.getAvailableFilter.pending,
        thunkHandlers.getAvailableFilterPending
      )
      .addCase(
        thunks.getAvailableFilter.fulfilled,
        thunkHandlers.getAvailableFilterFulFilled
      )
      // get filtered data
      .addCase(
        thunks.getFilteredData.pending,
        thunkHandlers.getFilteredDataPending
      )
      .addCase(
        thunks.getFilteredData.fulfilled,
        thunkHandlers.getFilteredDataFulfilled
      );
  },
});

export const chartActions = chartSlice.actions;

export default chartSlice.reducer;
