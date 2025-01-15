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
      .addCase(thunks.getUser.pending, thunkHandlers.getUserPending)
      .addCase(thunks.getUser.fulfilled, thunkHandlers.getUserFulfilled);
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
