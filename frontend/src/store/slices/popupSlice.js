import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPopup: "none",
};

const popupSlice = createSlice({
  name: "Popup",
  initialState,
  reducers: {
    togglePopup: (state, action) => {
      const { payload } = action;
      const { popupType } = payload;

      state.currentPopup = popupType;
    },
  },
});

export const popupActions = popupSlice.actions;

export default popupSlice.reducer;
