import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import popupMenuReducer from "./slices/popupSlice";
import categoryReducer from "./slices/category/categorySlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    popupMenu: popupMenuReducer,
    category: categoryReducer,
  },
});

export default store;
