export const getDefaultCategoriesFulfilled = (state, action) => {
  state.defaultCategories = action.payload;
  state.loadingState.isDefaultCategoriesLoading = false;
};

export const getDefaultCategoriesPending = (state, action) => {
  state.loadingState.isDefaultCategoriesLoading = true;
};

export const getCustomCategoriesFulfilled = (state, action) => {
  state.customCategories = action.payload;
  state.loadingState.isCustomCategoriesLoading = false;
};

export const getCustomCategoriesPending = (state, action) => {
  state.loadingState.isCustomCategoriesLoading = true;
};
