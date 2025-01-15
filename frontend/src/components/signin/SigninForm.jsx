import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import TextInput from "../UI/InputElements/TextInput";
import PasswordInput from "../UI/InputElements/PasswordInput";
import Button from "../UI/button";
import LoginIcon from "../UI/Icons/LoginIcon";
import Spinner from "../UI/Spinner";

import { emailSignin } from "../../api/auth";

import { userActions } from "../../store/slices/user/userSlice";

import { validateEmail, validatePassword } from "../../helpers/validations";

const LoginIconWithText = () => (
  <div className="flex items-center justify-center gap-2 text-zinc-800">
    <LoginIcon /> Login
  </div>
);

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [invalidState, setInvalidState] = useState({
    email: false,
    password: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (isFormSubmitted)
      setInvalidState({
        ...invalidState,
        email: !validateEmail(event.target.value),
      });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (isFormSubmitted)
      setInvalidState({
        ...invalidState,
        password: !validatePassword(event.target.value),
      });
  };

  const validateForm = () => {
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    setInvalidState({
      email: !isValidEmail,
      password: !isValidPassword,
    });

    return isValidEmail && isValidPassword;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    setIsSigningIn(true);

    const isValidForm = validateForm();
    if (!isValidForm) return setIsSigningIn(false);

    try {
      const data = await emailSignin(email, password);
      if (data) {
        dispatch(userActions.setUser(data.user));
        navigate("/dashboard", { replace: true });
      }

      setIsSigningIn(false);
    } catch (err) {
      console.log(err);
      setIsSigningIn(false);
    }
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <TextInput
        value={email}
        onChange={handleEmailChange}
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email..."
        errorMessage={invalidState.email && "Enter a valid email"}
      />

      <PasswordInput
        id="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
        errorMessage={
          invalidState.password &&
          "Enter a valid password (A-B a-b 0-9 length-8)"
        }
      />
      <p className="text-sm mt-2 text-gray-400">Forget password?</p>

      <Button disabled={isSigningIn}>
        {isSigningIn ? <Spinner size={22} /> : <LoginIconWithText />}
      </Button>
    </form>
  );
};

export default SigninForm;
