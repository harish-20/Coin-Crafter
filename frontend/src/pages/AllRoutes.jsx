import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import DashBoard from "./DashBoard";
import Transactions from "./Transactions";
import Categories from "./Categories";

import Layout from "../components/shared/Layout/Layout";

import WithPageGuard from "../HOCs/WithPageGuard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/signin"
        element={
          <WithPageGuard element={<Signin />} protection="without-auth" />
        }
      />
      <Route
        path="/signup"
        element={
          <WithPageGuard element={<Signup />} protection="without-auth" />
        }
      />
      <Route
        path="/"
        element={<WithPageGuard element={<Layout />} protection="with-auth" />}
      >
        <Route
          path="/dashboard"
          element={
            <WithPageGuard element={<DashBoard />} protection="with-auth" />
          }
        />
        <Route
          path="/transactions"
          element={
            <WithPageGuard element={<Transactions />} protection="with-auth" />
          }
        />
        <Route
          path="/categories"
          element={
            <WithPageGuard element={<Categories />} protection="with-auth" />
          }
        />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
