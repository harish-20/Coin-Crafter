import { Link } from "react-router-dom";

const SignupPrompt = () => {
  return (
    <div className="w-full flex items-center justify-center gap-3">
      <span className="text-sm font-semibold  whitespace-nowrap">
        Not a Member ?
      </span>
      <Link
        to="/signup"
        className="text-green-800 border-b-green-800 border-b-2"
      >
        Sign up
      </Link>
    </div>
  );
};

export default SignupPrompt;
