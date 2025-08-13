import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./store/store";

import { render } from "@testing-library/react";

const CLIENT_ID = process.env.VITE_CLIENT_ID;

const AllProviders = ({ children }) => (
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  </GoogleOAuthProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/jest-dom";
export { customRender as render };
