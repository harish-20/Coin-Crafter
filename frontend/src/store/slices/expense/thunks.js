import { createAsyncThunk } from "@reduxjs/toolkit";
import { createExpense, getAllExpense } from "../../../api/expense";
import { popupActions } from "../popupSlice";

export const getAllTransaction = createAsyncThunk(
  "get-all-transaction",
  async (args, thunkApi) => {
    try {
      const expenses = await getAllExpense();

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
      const { user, category, amount, description: shortNote, tags } = args;
      await createExpense({ user, category, amount, shortNote, tags });
      thunkApi.dispatch(getAllTransaction());
      thunkApi.dispatch(popupActions.togglePopup("none"));
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
