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
    // get default category
    builder.addCase(
      thunks.getDefaultCategories.pending,
      thunkHandlers.getDefaultCategories.pending
    );
    builder.addCase(
      thunks.getDefaultCategories.fulfilled,
      thunkHandlers.getDefaultCategories.fulfilled
    );
    // get custom category
    builder.addCase(
      thunks.getCustomCategories.pending,
      thunkHandlers.getCustomCategories.pending
    );
    builder.addCase(
      thunks.getCustomCategories.fulfilled,
      thunkHandlers.getCustomCategories.fulfilled
    );
  },
});

export const categoryActions = categorySlice.actions;
export const categoryThunks = thunks;

export default categorySlice.reducer;
