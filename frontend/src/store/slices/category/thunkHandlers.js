export const getDefaultCategoriesFulfilled = (state, action) => {
  console.log(action.payload);
  state.defaultCategories = action.payload;
  state.loadingState.isDefaultCategoriesLoading = false;
};

export const getDefaultCategoriesPending = (state, action) => {
  state.loadingState.isDefaultCategoriesLoading = true;
};

export const getCustomCategoriesFulfilled = (state, action) => {
  console.log(action.payload);
  state.customCategories = action.payload;
  state.loadingState.isCustomCategoriesLoading = false;
};

export const getCustomCategoriesPending = (state, action) => {
  state.loadingState.isCustomCategoriesLoading = true;
};
