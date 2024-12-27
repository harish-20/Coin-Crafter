import { createSlice } from "@reduxjs/toolkit";

import * as thunks from "./thunks";
import * as thunkHandlers from "./thunkHandlers";
import * as actionHandlers from "./actionHandlers";

const initialState = {
  expenses: [],
  loadingState: {
    isExpenseLoading: false,
    isExpenseAdding: false,
  },
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(
        thunks.createTransaction.pending,
        thunkHandlers.createTransactionPending
      )
      .addCase(
        thunks.createTransaction.fulfilled,
        thunkHandlers.createTransactionFulfilled
      ),
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;
