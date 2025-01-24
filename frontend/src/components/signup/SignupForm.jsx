import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import TextInput from "../UI/InputElements/TextInput";
import PasswordInput from "../UI/InputElements/PasswordInput";
import PoliciesCheckbox from "../UI/InputElements/PoliciesCheckbox";
import Button from "../UI/Button";
import SigninIcon from "../UI/Icons/SigninIcon";
import ErrorText from "../UI/ErrorText";

import { userActions } from "../../store/slices/user/userSlice";

import { signupSchema } from "../../zodSchemas";

import { emailSignup } from "../../api/auth";

import getErrorMessage from "../../helpers/getErrorMessage";

const SigninIconWithText = () => (
  <div className="flex items-center justify-center gap-2 text-zinc-800">
    <SigninIcon /> Create Account
  </div>
);

const SignupForm = () => {
  const [formError, setFormError] = useState("");

  const {
    register,
    formState,
    handleSubmit: onSubmit,
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (formData) => {
    try {
      const data = await emailSignup(
        formData.name,
        formData.email,
        formData.password
      );
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
    <form
      className="flex-1 mt-8"
      onSubmit={onSubmit(handleSubmit)}
      autoComplete="on"
    >
      <TextInput
        label="Name"
        id="name"
        register={register("name")}
        errorMessage={formState.errors?.name?.message}
      />
      <TextInput
        label="Email"
        id="email"
        register={register("email")}
        errorMessage={formState.errors?.email?.message}
      />
      <PasswordInput
        id="password"
        label="Password"
        register={register("password")}
        errorMessage={formState.errors?.password?.message}
      />
      <PasswordInput
        label="Confirm Password"
        name="confirmPassword"
        register={register("confirmPassword")}
        errorMessage={formState.errors?.confirmPassword?.message}
      />

      <PoliciesCheckbox
        id="policy"
        register={register("isPoliciesAccepted")}
        errorMessage={formState.errors?.isPoliciesAccepted?.message}
      />

      <div className="mt-6 text-center">
        {formError && <ErrorText className="mb-2">{formError}</ErrorText>}

        <Button className="mt-0" isLoading={formState.isSubmitting}>
          <SigninIconWithText />
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
