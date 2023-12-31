import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <Link
      className="bg-green-900 px-10 py-3 rounded-lg text-white text-xl font-semibold tracking-wider mt-8 duration-300 hover:bg-green-700 hover:shadow-green-600 hover:shadow-lg"
      to="/signin"
    >
      Login
    </Link>
  );
};

export default CTA;
