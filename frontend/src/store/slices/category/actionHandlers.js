export const addCategory = (state, action) => {
  state.customCategories = [...state.customCategories, action.payload];
};
