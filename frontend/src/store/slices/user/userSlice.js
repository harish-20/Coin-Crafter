import { createSlice } from "@reduxjs/toolkit";

import * as actionHandlers from "./actionHandlers";
import * as thunks from "./thunks";
import * as thunkHandlers from "./thunkHandlers";

const initialState = {
  userDetails: null,
  isUserLoading: true,
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: actionHandlers.setUser,
    resetUser: actionHandlers.resetUser,
  },
  extraReducers: (builder) => {
    builder
      // get user
      .addCase(thunks.getUser.pending, thunkHandlers.getUser.pending)
      .addCase(thunks.getUser.fulfilled, thunkHandlers.getUser.fulfilled);
  },
});

export const userActions = userSlice.actions;
export const userThunks = thunks;

export default userSlice.reducer;
