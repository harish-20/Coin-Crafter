export const getAllTransactionPending = (state, action) => {
  state.loadingState.isExpensesLoading = true;
};

export const getAllTransactionFulfilled = (state, action) => {
  state.loadingState.isExpensesLoading = false;
  state.expenses = action.payload;
};

export const createTransactionPending = (state, action) => {
  state.loadingState.isExpenseAdding = true;
};

export const createTransactionFulfilled = (state, action) => {
  state.loadingState.isExpenseAdding = false;
};

export const updateTrasactionPending = (state, action) => {
  const updatingTransactionId = action.meta.arg._id;
  state.loadingState.expensesUpdating = [
    ...state.loadingState.expensesUpdating,
    updatingTransactionId,
  ];
  // closing the update form after updated data submitted
  state.expenseOnEditMode = null;
};

export const updateTrasactionFulfilled = (state, action) => {
  const { expense: updatedExpense } = action.payload;

  const updatedExpenseIndex = state.expenses.findIndex(
    (expense) => expense._id === updatedExpense._id
  );
  if (updatedExpenseIndex !== -1)
    state.expenses[updatedExpenseIndex] = updatedExpense;
  else console.log("cannot find index to updated");

  state.loadingState.expensesUpdating =
    state.loadingState.expensesUpdating.filter(
      (id) => id !== updatedExpense._id
    );
};
