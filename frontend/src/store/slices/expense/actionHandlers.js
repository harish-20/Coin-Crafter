export const toggleEditMode = (state, action) => {
  state.expenseOnEditMode = action.payload;
};

export const toggleFilter = (state, action) => {
  const defaultFilters = {
    category: "",
    incomeType: "",
  };
  state.filters = { ...defaultFilters, ...action.payload };
};

export const toggleSort = (state, action) => {
  state.sorts = action.payload;
};

export const setSearch = (state, action) => {
  state.search = action.payload;
};

export const setDeleteTransactionTarget = (state, action) => {
  const defaultDeleteTransaction = {
    id: "",
    description: "",
  };
  state.deleteTransactionTarget = {
    ...defaultDeleteTransaction,
    ...action.payload,
  };
};

export const removeExpenseSoft = (state, action) => {
  const id = action.payload;
  state.expenses = state.expenses.filter((expense) => expense._id !== id);
};
