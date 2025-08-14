import { GoogleOAuthProvider } from "@react-oauth/google";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { initialState, reducer } from "./store/store";

import { render } from "@testing-library/react";

const CLIENT_ID = process.env.VITE_CLIENT_ID;

const customRender = (ui, preloadedState, ...options) => {
  let store = configureStore({
    reducer,
    preloadedState: { ...initialState, ...preloadedState },
  });

  const AllProviders = ({ children }) => (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>
  );
  render(ui, { wrapper: AllProviders, ...options });
};

export * from "@testing-library/jest-dom";
export { customRender as render };
