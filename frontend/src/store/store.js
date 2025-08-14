import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/user/userSlice";
import popupReducer from "./slices/popup/popupSlice";
import categoryReducer from "./slices/category/categorySlice";
import expenseReducer from "./slices/expense/expenseSlice";
import chartReducer from "./slices/chart/chartSlice";

export const reducer = {
  user: userReducer,
  popup: popupReducer,
  category: categoryReducer,
  expense: expenseReducer,
  chart: chartReducer,
};

const store = configureStore({ reducer });

export const initialState = store.getState();

export default store;
