import { createSlice } from "@reduxjs/toolkit";

import * as actionHandlers from "./actionHandlers";

const initialState = {
  currentPopup: "none",
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    togglePopup: actionHandlers.togglePopup,
  },
});

export const popupActions = popupSlice.actions;

export default popupSlice.reducer;
