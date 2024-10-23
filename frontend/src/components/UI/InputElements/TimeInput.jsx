import React from "react";
import InputContainer from "./InputContainer";
import Label from "../Label";

const TimeInput = (props) => {
  const { id, label, ...otherProps } = props;

  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");

  const timeString = hh + ":" + mm;
  return (
    <InputContainer>
      <Label label={label} id={id} />

      <input
        className="bg-transparent mt-2 py-2 px-4 border-[1.5px] border-gray-700 rounded-lg outline-none duration-200 focus:border-gray-400"
        type="time"
        defaultValue={timeString}
        {...otherProps}
      />
    </InputContainer>
  );
};

export default TimeInput;
