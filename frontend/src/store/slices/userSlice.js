import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userDetails: null,
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    login(state, payload) {},
  },
});

export default userSlice.reducer;
