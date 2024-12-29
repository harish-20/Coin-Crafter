import React from "react";

import Label from "../Label";
import InputContainer from "./InputContainer";

const DateInput = (props) => {
  const { id, label, value, onChange, ...otherProps } = props;

  const dateValue = new Date(value || "");
  const dd = String(dateValue.getDate()).padStart(2, "0");
  const mm = String(dateValue.getMonth() + 1).padStart(2, "0");
  const yyyy = dateValue.getFullYear();

  const dateString = yyyy + "-" + mm + "-" + dd;
  return (
    <InputContainer>
      <Label label={label} id={id} />

      <input
        className="bg-transparent mt-2 py-2 px-4 border-[1.5px] border-gray-700 rounded-lg outline-none duration-200 focus:border-gray-400"
        type="date"
        value={dateString}
        onChange={onChange}
        {...otherProps}
      />
    </InputContainer>
  );
};

export default DateInput;
