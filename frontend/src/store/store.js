import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import popupMenuReducer from "./slices/popupSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    popupMenu: popupMenuReducer,
  },
});

export default store;
