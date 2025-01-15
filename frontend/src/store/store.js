import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/user/userSlice";
import popupReducer from "./slices/popup/popupSlice";
import categoryReducer from "./slices/category/categorySlice";
import expenseReducer from "./slices/expense/expenseSlice";
import chartReducer from "./slices/chart/chartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    popup: popupReducer,
    category: categoryReducer,
    expense: expenseReducer,
    chart: chartReducer,
  },
});

export default store;
