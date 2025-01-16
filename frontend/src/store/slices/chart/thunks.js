import { createAsyncThunk } from "@reduxjs/toolkit";
import * as expenseApi from "../../../api/expense";

export const getAvailableFilter = createAsyncThunk(
  "get-available-filters",
  async (args, thunkApi) => {
    try {
      const filters = await expenseApi.getAvailableFilter();

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
      const filteredData = await expenseApi.getAllExpense({
        month,
        year,
      });

      return filteredData;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
