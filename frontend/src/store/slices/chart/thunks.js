import { createAsyncThunk } from "@reduxjs/toolkit";
import * as expenseApi from "../../../api/expense";

export const getAvailableFilter = createAsyncThunk(
  "get-available-filters",
  async (args, thunkApi) => {
    try {
      const filters = await expenseApi.getAvailableFilter();

      return filters;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const getFilteredData = createAsyncThunk(
  "get-filtered-data",
  async (args, thunkApi) => {
    try {
      console.log(args);
      const filteredData = await expenseApi.getAllExpense({
        month: args.month,
        year: args.year,
      });

      return filteredData;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
