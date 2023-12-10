import React from "react";

import AuthContainer from "../components/UI/AuthContainer";
import SignupTitle from "../components/signup/SignupTitle";
import SignupForm from "../components/signup/SignupForm";
import TermsAndPolicyLinks from "../components/shared/TermsAndPolicyLinks";

const Signup = () => {
  return (
    <AuthContainer>
      <SignupTitle />
      <SignupForm />
      <TermsAndPolicyLinks fixedBottom />
    </AuthContainer>
  );
};

export default Signup;
