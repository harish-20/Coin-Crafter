import { createAsyncThunk } from "@reduxjs/toolkit";

import { categoryAPI } from "../../../api";

export const getDefaultCategories = createAsyncThunk(
  "categories-getDefaultCategories",
  async (arg, thunkAPI) => {
    try {
      const categories = await categoryAPI.getDefaultCategories();

      return categories;
    } catch (err) {
      thunkAPI.rejectWithValue("unable to fetch default categories");
    }
  }
);

export const getCustomCategories = createAsyncThunk(
  "categories-getCustomCategories",
  async (arg, thunkAPI) => {
    try {
      const categories = await categoryAPI.getCustomCategories();

      return categories;
    } catch (err) {
      thunkAPI.rejectWithValue("unable to fetch custom categories");
    }
  }
);
