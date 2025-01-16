import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import DashBoard from "./DashBoard";
import Transactions from "./Transactions";
import Categories from "./Categories";
import Layout from "../components/shared/Layout/Layout";

import withPageGuard from "../HOCs/WithAuth";

import { userThunks } from "../store/slices/user/userSlice";

const AllRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userThunks.getUser());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={withPageGuard(Signin, "without-auth")} />
      <Route path="/signup" element={withPageGuard(Signup, "without-auth")} />
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={withPageGuard(DashBoard)} />
        <Route path="/transactions" element={withPageGuard(Transactions)} />
        <Route path="/categories" element={withPageGuard(Categories)} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
