import { createAsyncThunk } from "@reduxjs/toolkit";

import { authAPI } from "../../../api";

export const getUser = createAsyncThunk("get-user", async (args, thunkApi) => {
  try {
    const token = localStorage.getItem("access-token");
    if (token) {
      const data = await authAPI.getUser();
      if (data) {
        return data.user;
      } else {
        thunkApi.rejectWithValue("User not found");
      }
    } else {
      thunkApi.rejectWithValue("User not found");
    }
  } catch (error) {
    thunkApi.rejectWithValue(error);
  }
});
