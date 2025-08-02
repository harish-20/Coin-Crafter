import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  createExpense,
  getAllExpense,
  updateExpense,
  deleteExpense,
  autoFillExpense,
} from "../../../api/expense";

import { expenseActions } from "./expenseSlice";

import { chartThunks } from "../chart/chartSlice";

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
      // If no expense there need to get filters too
      if (!thunkApi.getState().chart.filters.year)
        await thunkApi.dispatch(chartThunks.getAvailableFilter()).unwrap();
      thunkApi.dispatch(chartThunks.getFilteredData());
      thunkApi.dispatch(chartThunks.getAvailableFilter());

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

export const deleteTransaction = createAsyncThunk(
  "delete-transaction",
  async (args, thunkApi) => {
    try {
      const response = await deleteExpense(args);

      thunkApi.dispatch(expenseActions.removeExpenseSoft(args));
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const autoFillTransactions = createAsyncThunk(
  "auto-fill-transaction",
  async (args, thunkApi) => {
    try {
      const response = await autoFillExpense();

      if (response.success) {
        thunkApi.dispatch(getAllTransaction());
        await thunkApi.dispatch(chartThunks.getAvailableFilter()).unwrap();
        thunkApi.dispatch(chartThunks.getFilteredData());
      }

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
