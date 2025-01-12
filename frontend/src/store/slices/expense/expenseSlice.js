import { createSlice } from "@reduxjs/toolkit";

import * as thunks from "./thunks";
import * as thunkHandlers from "./thunkHandlers";
import * as actionHandlers from "./actionHandlers";

const initialState = {
  expenses: [],
  expenseOnEditMode: null,
  filters: {
    category: "",
    incomeType: "",
  },
  sorts: {},
  loadingState: {
    isExpensesLoading: false,
    isExpenseAdding: false,
  },
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    toggleEditMode: actionHandlers.toggleEditMode,
    toggleFilter: actionHandlers.toggleFilter,
  },
  extraReducers: (builder) =>
    builder
      // get transactions
      .addCase(
        thunks.getAllTransaction.pending,
        thunkHandlers.getAllTransactionPending
      )
      .addCase(
        thunks.getAllTransaction.fulfilled,
        thunkHandlers.getAllTransactionFulfilled
      )
      // create transaction
      .addCase(
        thunks.createTransaction.pending,
        thunkHandlers.createTransactionPending
      )
      .addCase(
        thunks.createTransaction.fulfilled,
        thunkHandlers.createTransactionFulfilled
      ),
  // edit transaction
  // .addCase(),
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;
