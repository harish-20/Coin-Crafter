import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import popupMenuReducer from "./slices/popupSlice";
import categoryReducer from "./slices/category/categorySlice";
import expenseReducer from "./slices/expense/expenseSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    popupMenu: popupMenuReducer,
    category: categoryReducer,
    expense: expenseReducer,
  },
});

export default store;
