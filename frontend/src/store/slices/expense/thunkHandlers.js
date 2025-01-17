export const getAllTransaction = {
  pending: (state, action) => {
    state.errorState.isExpensesLoadingError = false;
    state.loadingState.isExpensesLoading = true;
  },
  fulfilled: (state, action) => {
    state.loadingState.isExpensesLoading = false;
    state.expenses = action.payload;
  },
  rejected: (state, action) => {
    state.errorState.isExpensesLoadingError = true;
    state.loadingState.isExpensesLoading = false;
  },
};

export const createTransaction = {
  pending: (state, action) => {
    state.errorState.isExpenseAddingError = false;
  },
  fulfilled: (state, action) => {
    state.loadingState.isExpenseAdding = false;
  },
  rejected: (state, action) => {
    state.loadingState.isExpenseAdding = false;
  },
};

export const updateTransaction = {
  pending: (state, action) => {
    const updatingTransactionId = action.meta.arg._id;
    state.loadingState.expensesUpdating = [
      ...state.loadingState.expensesUpdating,
      updatingTransactionId,
    ];
    state.expenseOnEditMode = null;
  },
  fulfilled: (state, action) => {
    const { expense: updatedExpense } = action.payload;

    const updatedExpenseIndex = state.expenses.findIndex(
      (expense) => expense._id === updatedExpense._id
    );
    if (updatedExpenseIndex !== -1) {
      state.expenses[updatedExpenseIndex] = updatedExpense;
    } else {
      console.warn("Cannot find index to update the expense.");
    }

    state.loadingState.expensesUpdating =
      state.loadingState.expensesUpdating.filter(
        (id) => id !== updatedExpense._id
      );
  },
};

export const autoFillExpense = {
  pending: (state, action) => {
    state.loadingState.isAutoFilling = true;
  },
  fulfilled: (state, action) => {
    state.loadingState.isAutoFilling = false;
  },
  rejected: (state, action) => {
    state.loadingState.isAutoFilling = false;
  },
};
