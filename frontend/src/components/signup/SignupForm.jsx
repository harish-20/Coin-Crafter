import React, { useState } from "react";

import TextInput from "../UI/InputElements/TextInput";
import PasswordInput from "../UI/InputElements/PasswordInput";
import PoliciesCheckbox from "../UI/InputElements/PoliciesCheckbox";
import Button from "../UI/button";
import SigninIcon from "../UI/Icons/SigninIcon";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  isPoliciesAccepted: false,
};

const SigninIconWithText = () => (
  <div className="flex items-center justify-center gap-2 text-zinc-800">
    <SigninIcon /> Create Account
  </div>
);

const SignupForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePolicyCheckBox = () => {
    setFormData((prev) => ({
      ...prev,
      isPoliciesAccepted: !prev.isPoliciesAccepted,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} autoComplete="on">
      <TextInput
        label="Name"
        id="name"
        name="name"
        value={formData.name}
        onChange={changeHandler}
      />
      <TextInput
        label="email"
        id="Email"
        name="email"
        value={formData.email}
        onChange={changeHandler}
      />
      <PasswordInput
        label="Password"
        name="password"
        value={formData.password}
        onChange={changeHandler}
      />
      <PasswordInput
        label="Confirm Password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={changeHandler}
      />

      <PoliciesCheckbox
        id="policy"
        value={formData.isPoliciesAccepted}
        onChange={togglePolicyCheckBox}
      />

      <Button>
        <SigninIconWithText />
      </Button>
    </form>
  );
};

export default SignupForm;
