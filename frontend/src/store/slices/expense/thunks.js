import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  createExpense,
  getAllExpense,
  updateExpense,
} from "../../../api/expense";

export const getAllTransaction = createAsyncThunk(
  "get-all-transaction",
  async (args, thunkApi) => {
    try {
      const { expense } = thunkApi.getState();
      const { sorts, filters, search } = expense;
      const expenses = await getAllExpense({ ...sorts, ...filters, search });

      return expenses;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const createTransaction = createAsyncThunk(
  "create-transaction",
  async (args, thunkApi) => {
    try {
      const {
        category,
        amount,
        description: shortNote,
        date,
        time,
        tags,
      } = args;
      const response = await createExpense({
        category,
        amount,
        shortNote,
        tags,
        date,
        time,
      });

      thunkApi.dispatch(getAllTransaction());

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "update-transaction",
  async (args, thunkApi) => {
    try {
      const {
        _id,
        category,
        amount,
        description: shortNote,
        date,
        time,
        tags,
      } = args;
      const response = await updateExpense({
        _id,
        category,
        amount,
        shortNote,
        date,
        time,
        tags,
      });

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
