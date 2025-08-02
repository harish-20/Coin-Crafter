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
  deleteTransactionTarget: {
    id: "",
    description: "",
  },
  sorts: {},
  search: "",
  loadingState: {
    isExpensesLoading: false,
    isExpenseAdding: false,
    expensesUpdating: [],
    isAutoFilling: false,
    isExpenseDeleting: false,
  },
  errorState: {
    isExpensesLoadingError: false,
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
    setDeleteTransactionTarget: actionHandlers.setDeleteTransactionTarget,
    removeExpenseSoft: actionHandlers.removeExpenseSoft,
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
      )
      .addCase(
        thunks.getAllTransaction.rejected,
        thunkHandlers.getAllTransaction.rejected
      )
      // Create transaction
      .addCase(
        thunks.createTransaction.pending,
        thunkHandlers.createTransaction.pending
      )
      .addCase(
        thunks.createTransaction.fulfilled,
        thunkHandlers.createTransaction.fulfilled
      )
      .addCase(
        thunks.createTransaction.rejected,
        thunkHandlers.createTransaction.rejected
      )
      // Update transaction
      .addCase(
        thunks.updateTransaction.pending,
        thunkHandlers.updateTransaction.pending
      )
      .addCase(
        thunks.updateTransaction.fulfilled,
        thunkHandlers.updateTransaction.fulfilled
      )
      // Delete transaction
      .addCase(
        thunks.deleteTransaction.pending,
        thunkHandlers.deleteTransaction.pending
      )
      .addCase(
        thunks.deleteTransaction.fulfilled,
        thunkHandlers.deleteTransaction.fulfilled
      )
      .addCase(
        thunks.deleteTransaction.rejected,
        thunkHandlers.deleteTransaction.rejected
      )
      // auto fill transaction
      .addCase(
        thunks.autoFillTransactions.pending,
        thunkHandlers.autoFillExpense.pending
      )
      .addCase(
        thunks.autoFillTransactions.fulfilled,
        thunkHandlers.autoFillExpense.fulfilled
      )
      .addCase(
        thunks.autoFillTransactions.rejected,
        thunkHandlers.autoFillExpense.rejected
      );
  },
});

export const expenseActions = expenseSlice.actions;
export const expenseThunks = thunks;

export default expenseSlice.reducer;
