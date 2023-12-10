import React, { useState } from "react";

import TextInput from "../UI/InputElements/TextInput";
import PasswordInput from "../UI/InputElements/PasswordInput";
import Button from "../UI/button";
import LoginIcon from "../UI/Icons/LoginIcon";

const LoginIconWithText = () => (
  <div className="flex items-center justify-center gap-2 text-zinc-800">
    <LoginIcon /> Login
  </div>
);

const LoginForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {};

  return (
    <form className="" onSubmit={handleSubmit}>
      <TextInput
        value={email}
        onChange={handleEmailChange}
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email..."
      />

      <PasswordInput id="password" placeholder="Enter your password" />
      <p className="text-sm mt-2 text-gray-400">Forget password?</p>

      <Button>
        <LoginIconWithText />
      </Button>
    </form>
  );
};

export default LoginForm;
