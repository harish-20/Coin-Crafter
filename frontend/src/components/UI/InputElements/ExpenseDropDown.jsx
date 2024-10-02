import React, { useEffect, useRef, useState } from "react";
import InputContainer from "./InputContainer";

import icons from "../CategoryIcon";

const ExpenseItem = (props) => (
  <div
    className={`flex items-center gap-4 py-3 px-6 cursor-pointer ${
      props.className || ""
    }`}
    onClick={props.onClick}
  >
    <icons.Box />
    <div>Expense</div>
  </div>
);

const expenses = [1, 2, 2, 2, 3, 4, 4, 3];

const ExpenseDropDown = (props) => {
  const { label, value, setValue } = props;

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropDownRef = useRef(null);

  const openDropDown = () => setIsDropDownOpen(true);
  const handleSelect = () => {
    // setValue("some value for now");
    setIsDropDownOpen(false);
  };

  useEffect(() => {
    const listener = (event) => {
      const isClickMadeOutside =
        event.target !== dropDownRef.current &&
        event.target.contains(dropDownRef.current);
      console.log(isClickMadeOutside, isDropDownOpen);

      if (isDropDownOpen && isClickMadeOutside) setIsDropDownOpen(false);
    };

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, [isDropDownOpen]);

  return (
    <InputContainer>
      <label className="">{label}</label>

      <div className="relative mt-3">
        <div
          ref={dropDownRef}
          className={`border ${
            isDropDownOpen ? "border-gray-400" : "border-gray-700"
          } rounded-lg duration-200`}
          onClick={openDropDown}
          tabIndex={1}
        >
          <ExpenseItem />
        </div>

        <div
          style={{ height: isDropDownOpen ? "200px" : "0px" }}
          className="absolute w-full top-[110%] overflow-y-auto duration-300 bg-gray-800 rounded-lg"
        >
          {expenses.map((expense, index) => (
            <ExpenseItem
              className="hover:bg-gray-700 duration-200"
              onClick={handleSelect}
              key={index}
            />
          ))}
        </div>
      </div>
    </InputContainer>
  );
};

export default ExpenseDropDown;
