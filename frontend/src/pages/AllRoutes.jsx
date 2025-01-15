import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import DashBoard from "./DashBoard";
import Transactions from "./Transactions";
import Categories from "./Categories";
import Layout from "../components/shared/Layout/Layout";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/categories" element={<Categories />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
