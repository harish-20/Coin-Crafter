import React from "react";

import Label from "../Label";
import InputContainer from "./InputContainer";

const DateInput = (props) => {
  const { id, label, ...otherProps } = props;

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();

  const todayDate = yyyy + "-" + mm + "-" + dd;
  return (
    <InputContainer>
      <Label label={label} id={id} />

      <input
        className="bg-transparent mt-2 py-2 px-4 border-[1.5px] border-gray-700 rounded-lg outline-none duration-200 focus:border-gray-400"
        type="date"
        defaultValue={todayDate}
        {...otherProps}
      />
    </InputContainer>
  );
};

export default DateInput;
