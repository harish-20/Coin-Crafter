import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPopup: "none",
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    togglePopup: (state, action) => {
      const popupType = action.payload;

      state.currentPopup = popupType;
    },
  },
});

export const popupActions = popupSlice.actions;

export default popupSlice.reducer;
