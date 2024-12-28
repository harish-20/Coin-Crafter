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
