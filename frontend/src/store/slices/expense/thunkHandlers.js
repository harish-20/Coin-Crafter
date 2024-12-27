export const createTransactionPending = (state, action) => {
  state.loadingState.isExpenseAdding = true;
};

export const createTransactionFulfilled = (state, action) => {
  state.loadingState.isExpenseAdding = false;
};
