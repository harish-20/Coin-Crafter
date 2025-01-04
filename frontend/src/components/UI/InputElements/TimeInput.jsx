import React from "react";
import InputContainer from "./InputContainer";
import Label from "../Label";

const TimeInput = (props) => {
  const { id, label, value, onChange, ...otherProps } = props;

  const now = value ? new Date(value) : new Date();
  const options = {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const [hh, mm] = now.toLocaleString("en-US", options).split(":");

  const timeString = `${hh}:${mm}`;
  return (
    <InputContainer>
      <Label label={label} id={id} />

      <input
        className="bg-transparent mt-2 py-2 px-4 border-[1.5px] border-gray-700 rounded-lg outline-none duration-200 focus:border-gray-400"
        type="time"
        value={timeString}
        onChange={onChange}
        {...otherProps}
      />
    </InputContainer>
  );
};

export default TimeInput;
