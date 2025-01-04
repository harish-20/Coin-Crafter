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
