import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import DashBoard from "./DashBoard";
import Transactions from "./Transactions";
import Categories from "./Categories";

import Layout from "../components/shared/Layout/Layout";

import WithAuth from "../HOCs/WithAuth";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/signin"
        element={<WithAuth element={<Signin />} protection="without-auth" />}
      />
      <Route
        path="/signup"
        element={<WithAuth element={<Signup />} protection="without-auth" />}
      />
      <Route path="/" element={<Layout />}>
        <Route
          path="/dashboard"
          element={<WithAuth element={<DashBoard />} protection="with-auth" />}
        />
        <Route
          path="/transactions"
          element={
            <WithAuth element={<Transactions />} protection="with-auth" />
          }
        />
        <Route
          path="/categories"
          element={<WithAuth element={<Categories />} protection="with-auth" />}
        />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
