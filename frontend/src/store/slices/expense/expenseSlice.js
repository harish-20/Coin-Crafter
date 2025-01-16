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
  search: "",
  loadingState: {
    isExpensesLoading: false,
    isExpenseAdding: false,
    expensesUpdating: [],
  },
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    toggleEditMode: actionHandlers.toggleEditMode,
    toggleFilter: actionHandlers.toggleFilter,
    toggleSort: actionHandlers.toggleSort,
    setSearch: actionHandlers.setSearch,
  },
  extraReducers: (builder) => {
    // Get all transactions
    builder
      .addCase(
        thunks.getAllTransaction.pending,
        thunkHandlers.getAllTransaction.pending
      )
      .addCase(
        thunks.getAllTransaction.fulfilled,
        thunkHandlers.getAllTransaction.fulfilled
      );

    // Create transaction
    builder
      .addCase(
        thunks.createTransaction.pending,
        thunkHandlers.createTransaction.pending
      )
      .addCase(
        thunks.createTransaction.fulfilled,
        thunkHandlers.createTransaction.fulfilled
      );

    // Update transaction
    builder
      .addCase(
        thunks.updateTransaction.pending,
        thunkHandlers.updateTransaction.pending
      )
      .addCase(
        thunks.updateTransaction.fulfilled,
        thunkHandlers.updateTransaction.fulfilled
      );
  },
});

export const expenseActions = expenseSlice.actions;
export const expenseThunks = thunks;

export default expenseSlice.reducer;
