import { createAsyncThunk } from "@reduxjs/toolkit";

import { expenseAPI } from "../../../api";

export const getAvailableFilter = createAsyncThunk(
  "get-available-filters",
  async (args, thunkApi) => {
    try {
      const filters = await expenseAPI.getAvailableFilter();

      return filters;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getFilteredData = createAsyncThunk(
  "get-filtered-data",
  async (args, thunkApi) => {
    try {
      const { month, year } = thunkApi.getState().chart.filters;
      const filteredData = await expenseAPI.getAllExpense({
        month,
        year,
      });

      return filteredData;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
