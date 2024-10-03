export const getDefaultCategoriesFulfilled = (state, action) => {
  console.log(action.payload);
  state.defaultCategories = action.payload;
  state.loadingState.isDefaultCategoriesLoading = false;
};

export const getDefaultCategoriesPending = (state, action) => {
  state.loadingState.isDefaultCategoriesLoading = true;
};
