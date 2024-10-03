import { createSlice } from "@reduxjs/toolkit";

import * as thunks from "./thunks";
import * as thunkHandlers from "./thunkHandlers";

const initialState = {
  defaultCategories: [],
  customCategories: [],
  loadingState: {
    isDefaultCategoriesLoading: false,
    isCustomCategoriesLoading: false,
  },
};

const categorySlice = createSlice({
  name: "Popup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      thunks.getDefaultCategories.pending,
      thunkHandlers.getDefaultCategoriesPending
    );
    builder.addCase(
      thunks.getDefaultCategories.fulfilled,
      thunkHandlers.getDefaultCategoriesFulfilled
    );
  },
});

export const popupActions = categorySlice.actions;

export default categorySlice.reducer;
