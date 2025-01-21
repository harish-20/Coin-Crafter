import { Link } from "react-router-dom";

import Title from "../UI/Title";

const SignupTitle = () => {
  return (
    <div className="mt-6 md:mt-16">
      <Title>Sign up with your account</Title>

      <p className="mt-2 tracking-wide">
        Already have an account?
        <Link
          className="text-green-800 border-b-2 border-green-800 font-semibold"
          to="/signin"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignupTitle;
