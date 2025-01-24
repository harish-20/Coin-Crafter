import { useRef, useState } from "react";

import InputContainer from "../InputElements/InputContainer";
import EyeIcon from "./EyeIcon";
import Label from "../Label";

const PasswordInput = (props) => {
  const { id, label, errorMessage, register, ...otherProps } = props;

  const [isPassword, setIsPassword] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const passwordRef = useRef(null);

  const toggleIsPassword = () => {
    setIsPassword((prev) => !prev);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = (event) => {
    setIsFocused(false);
    register.onBlur(event);
  };

  return (
    <InputContainer className="">
      <Label id={id} label={label} />
      <div className="flex relative">
        <input
          id={id}
          ref={passwordRef}
          className="w-full bg-transparent mt-2 py-2 px-4 border-[1.5px] border-gray-700 rounded-lg focus:border-gray-400 focus:outline-none"
          type={isPassword ? "password" : "text"}
          autoComplete="true"
          {...register}
          onFocus={onFocus}
          onBlur={onBlur}
          {...otherProps}
        />

        <EyeIcon
          isFocused={isFocused}
          isHidden={isPassword}
          onClick={toggleIsPassword}
        />
      </div>
      {errorMessage && (
        <div className="mt-1 text-red-500 text-xs">{errorMessage}</div>
      )}
    </InputContainer>
  );
};

export default PasswordInput;
