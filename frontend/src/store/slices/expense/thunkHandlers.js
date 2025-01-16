export const getAllTransaction = {
  pending: (state, action) => {
    state.loadingState.isExpensesLoading = true;
  },
  fulfilled: (state, action) => {
    state.loadingState.isExpensesLoading = false;
    state.expenses = action.payload;
  },
};

export const createTransaction = {
  pending: (state, action) => {
    state.loadingState.isExpenseAdding = true;
  },
  fulfilled: (state, action) => {
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
