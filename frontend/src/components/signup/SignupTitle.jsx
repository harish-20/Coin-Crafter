import React from "react";

import Title from "../UI/Title";
import { Link } from "react-router-dom";

const SignupTitle = () => {
  return (
    <>
      <Title>Sign up with your account</Title>
      <p className="mt-2 tracking-wide">
        Already have an account?{" "}
        <Link
          className="text-green-800 border-b-2 border-green-800 font-semibold"
          to="/signin"
        >
          Log in
        </Link>
      </p>
    </>
  );
};

export default SignupTitle;
