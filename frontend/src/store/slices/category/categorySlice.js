import { createSlice } from "@reduxjs/toolkit";

import * as thunks from "./thunks";
import * as thunkHandlers from "./thunkHandlers";
import * as actionHandlers from "./actionHandlers";

const initialState = {
  defaultCategories: [],
  customCategories: [],
  loadingState: {
    isDefaultCategoriesLoading: false,
    isCustomCategoriesLoading: false,
  },
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: actionHandlers.addCategory,
  },
  extraReducers: (builder) => {
    builder.addCase(
      thunks.getDefaultCategories.pending,
      thunkHandlers.getDefaultCategoriesPending
    );
    builder.addCase(
      thunks.getDefaultCategories.fulfilled,
      thunkHandlers.getDefaultCategoriesFulfilled
    );
    builder.addCase(
      thunks.getCustomCategories.pending,
      thunkHandlers.getCustomCategoriesPending
    );
    builder.addCase(
      thunks.getCustomCategories.fulfilled,
      thunkHandlers.getCustomCategoriesFulfilled
    );
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice.reducer;
