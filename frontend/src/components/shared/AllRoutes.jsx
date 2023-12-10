import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Signin from "../../pages/Signin";
import Signup from "../../pages/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;
