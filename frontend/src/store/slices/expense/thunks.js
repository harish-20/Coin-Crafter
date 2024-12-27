import { createAsyncThunk } from "@reduxjs/toolkit";
import { createExpense } from "../../../api/expense";

const getAllTransaction = createAsyncThunk(
  "get-all-transaction",
  async (args, thunkApi) => {}
);

export const createTransaction = createAsyncThunk(
  "create-transaction",
  async (args, thunkApi) => {
    try {
      const { user, category, amount, description: shortNote, tags } = args;
      await createExpense({ user, category, amount, shortNote, tags });
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
