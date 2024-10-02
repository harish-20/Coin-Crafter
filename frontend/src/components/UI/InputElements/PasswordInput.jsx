import { useRef, useState } from "react";

import InputContainer from "../InputElements/InputContainer";
import EyeIcon from "./EyeIcon";
import Label from "../Label";

const PasswordInput = (props) => {
  const { errorMessage, ...otherProps } = props;
  const passwordRef = useRef(null);
  const [isPassword, setIsPassword] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const toggleIsPassword = () => {
    setIsPassword((prev) => !prev);
  };

  return (
    <InputContainer className="">
      <Label id="password" label={props.label} />
      <div className="flex relative">
        <input
          ref={passwordRef}
          className="w-full bg-transparent mt-2 py-2 px-4 border-[1.5px] border-gray-700 rounded-lg focus:border-gray-400 focus:outline-none"
          type={isPassword ? "password" : "text"}
          {...otherProps} // Use otherProps to pass remaining attributes like id, name, onChange, value, etc.
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoComplete="true"
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
