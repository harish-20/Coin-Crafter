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
