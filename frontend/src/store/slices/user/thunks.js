import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from "../../../api/auth";

export const getUser = createAsyncThunk("get-user", async (args, thunkApi) => {
  try {
    const token = localStorage.getItem("access-token");
    if (!token) thunkApi.rejectWithValue("User not found");

    const data = await authApi.getUser();
    if (data) {
      return data.user;
    } else {
      thunkApi.rejectWithValue("User not found");
    }
  } catch (error) {
    thunkApi.rejectWithValue(error);
  }
});
