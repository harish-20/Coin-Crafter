import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import TextInput from "../UI/InputElements/TextInput";
import PasswordInput from "../UI/InputElements/PasswordInput";
import Button from "../UI/Button";
import LoginIcon from "../UI/Icons/LoginIcon";
import ErrorText from "../UI/ErrorText";
import Spinner from "../UI/Spinner";

import { emailSignin } from "../../api/auth";

import { userActions } from "../../store/slices/user/userSlice";

import getErrorMessage from "../../helpers/getErrorMessage";
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
  const [formError, setFormError] = useState("");

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

    const isValidForm = validateForm();
    if (!isValidForm) return;

    try {
      setIsSigningIn(true);
      const data = await emailSignin(email, password);
      if (data) {
        dispatch(userActions.setUser(data.user));
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      const errorCode = error?.response?.data?.code;
      const errorMessage = getErrorMessage(errorCode);

      setFormError(errorMessage || "Something went wrong. Cannot Signin");
    } finally {
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

      <div className="mt-6 text-center">
        {formError && <ErrorText className="mb-2">{formError}</ErrorText>}

        <Button className="mt-0" disabled={isSigningIn}>
          {isSigningIn ? (
            <Spinner color="black" size={22} hideText />
          ) : (
            <LoginIconWithText />
          )}
        </Button>
      </div>
    </form>
  );
};

export default SigninForm;
