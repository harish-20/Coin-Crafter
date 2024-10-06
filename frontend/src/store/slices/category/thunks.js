import { createAsyncThunk } from "@reduxjs/toolkit";

import * as categoryApi from "../../../api/category";

export const getDefaultCategories = createAsyncThunk(
  "categories-getDefaultCategories",
  async (arg, thunkAPI) => {
    try {
      const categories = await categoryApi.getDefaultCategories();

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
      const categories = await categoryApi.getCustomCategories();

      return categories;
    } catch (err) {
      thunkAPI.rejectWithValue("unable to fetch custom categories");
    }
  }
);
