import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import TextInput from "../UI/InputElements/TextInput";
import PasswordInput from "../UI/InputElements/PasswordInput";
import Button from "../UI/Button";
import ErrorText from "../UI/ErrorText";
import LoginIconWithText from "./SigninTitle";

import { userActions } from "../../store/slices/user/userSlice";

import { signinSchema } from "../../zodSchemas";

import { emailSignin } from "../../api/auth";

import getErrorMessage from "../../helpers/getErrorMessage";

const SigninForm = () => {
  const [formError, setFormError] = useState("");

  const {
    register,
    handleSubmit: onSubmit,
    formState,
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (formData) => {
    try {
      const { email, password } = formData;
      const data = await emailSignin(email, password);
      if (data) {
        dispatch(userActions.setUser(data.user));
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      const errorCode = error?.response?.data?.code;
      const errorMessage = getErrorMessage(errorCode);
      setFormError(errorMessage || "Something went wrong. Cannot Signin");
    }
  };

  return (
    <form className="flex-1" onSubmit={onSubmit(handleSubmit)}>
      <TextInput
        id="email"
        label="Email"
        placeholder="Enter your email..."
        errorMessage={formState.errors?.email?.message}
        register={register("email")}
        data-test="email-input"
      />

      <PasswordInput
        id="password"
        label="Password"
        placeholder="Enter your password"
        errorMessage={formState.errors?.password?.message}
        register={register("password")}
        data-test="password-input"
      />
      <p className="text-sm mt-2 text-gray-400">Forget password?</p>

      <div className="mt-6 text-center">
        {formError && <ErrorText className="mb-2">{formError}</ErrorText>}

        <Button
          className="mt-0"
          isLoading={formState.isSubmitting}
          data-test="submit"
        >
          <LoginIconWithText />
        </Button>
      </div>
    </form>
  );
};

export default SigninForm;
