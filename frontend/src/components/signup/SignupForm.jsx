import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { emailSignup } from "../../api/auth";

import TextInput from "../UI/InputElements/TextInput";
import PasswordInput from "../UI/InputElements/PasswordInput";
import PoliciesCheckbox from "../UI/InputElements/PoliciesCheckbox";
import Button from "../UI/button";
import SigninIcon from "../UI/Icons/SigninIcon";
import Spinner from "../UI/Spinner";

import { userActions } from "../../store/slices/user/userSlice";

import { validateEmail, validatePassword } from "../../helpers/validations";

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
  const [invalidData, setInvalidData] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateForm = () => {
    const isValidName = !!formData.name.trim();
    const isValidEmail = validateEmail(formData.email);
    const isValidPassword = validatePassword(formData.password);
    const isValidConfirmPassword =
      validatePassword(formData.confirmPassword) &&
      formData.password === formData.confirmPassword;

    setInvalidData({
      name: !isValidName,
      email: !isValidEmail,
      password: !isValidPassword,
      confirmPassword: !isValidConfirmPassword,
    });

    return (
      isValidName && isValidEmail && isValidPassword && isValidConfirmPassword
    );
  };

  useEffect(() => {
    if (isFormSubmitted) validateForm();
  }, [formData]);

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
    setIsFormSubmitted(true);
    setIsSigningUp(true);

    const isValidForm = validateForm();
    if (!isValidForm) return setIsSigningUp(false);

    try {
      const data = emailSignup(
        formData.name,
        formData.email,
        formData.password
      );
      if (data) {
        dispatch(userActions.setUser(data.user));
        navigate("/dashboard", { replace: true });
      }
    } catch (err) {
      setIsSigningUp(false);
      console.log("cannot signup", err);
    }

    setIsSigningUp(false);
  };

  return (
    <form onSubmit={submitHandler} autoComplete="on">
      <TextInput
        label="Name"
        id="name"
        name="name"
        value={formData.name}
        onChange={changeHandler}
        errorMessage={invalidData.name && "Enter a valid name"}
      />
      <TextInput
        label="email"
        id="Email"
        name="email"
        value={formData.email}
        onChange={changeHandler}
        errorMessage={invalidData.email && "Enter a valid email"}
      />
      <PasswordInput
        label="Password"
        name="password"
        value={formData.password}
        onChange={changeHandler}
        errorMessage={
          invalidData.password &&
          "Enter a valid password (A-B a-b 0-9 length-8)"
        }
      />
      <PasswordInput
        label="Confirm Password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={changeHandler}
        errorMessage={
          invalidData.confirmPassword && "Password is not matching or invalid"
        }
      />

      <PoliciesCheckbox
        id="policy"
        value={formData.isPoliciesAccepted}
        onChange={togglePolicyCheckBox}
        errorMessage={
          isFormSubmitted &&
          !formData.isPoliciesAccepted &&
          "Please check and accept the terms and condition"
        }
      />

      <Button disabled={isSigningUp}>
        {isSigningUp ? <Spinner size={22} /> : <SigninIconWithText />}
      </Button>
    </form>
  );
};

export default SignupForm;
