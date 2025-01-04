import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import popupMenuReducer from "./slices/popupSlice";
import categoryReducer from "./slices/category/categorySlice";
import expenseReducer from "./slices/expense/expenseSlice";
import chartReducer from "./slices/chart/chartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    popupMenu: popupMenuReducer,
    category: categoryReducer,
    expense: expenseReducer,
    chart: chartReducer,
  },
});

export default store;
