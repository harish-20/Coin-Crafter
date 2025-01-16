export const getDefaultCategories = {
  pending: (state, action) => {
    state.loadingState.isDefaultCategoriesLoading = true;
  },
  fulfilled: (state, action) => {
    state.defaultCategories = action.payload;
    state.loadingState.isDefaultCategoriesLoading = false;
  },
};

export const getCustomCategories = {
  pending: (state, action) => {
    state.loadingState.isCustomCategoriesLoading = true;
  },
  fulfilled: (state, action) => {
    state.customCategories = action.payload;
    state.loadingState.isCustomCategoriesLoading = false;
  },
};
