import { useEffect, useRef, useState } from "react";

import icons from "../CategoryIcon";
import InputContainer from "./InputContainer";
import FakeIcon from "../../categories/fakeIcon";

const ExpenseItem = (props) => {
  const Icon = icons[props.icon] || FakeIcon;

  return (
    <div
      className={`flex items-center gap-4 py-3 px-6 cursor-pointer ${
        props.className || ""
      }`}
      onClick={props.onClick}
    >
      <Icon />
      <div>{props.title}</div>
    </div>
  );
};

const ExpenseDropDown = (props) => {
  const { label, value, onChange, expenseList, errorMessage } = props;

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropDownRef = useRef(null);

  const openDropDown = () => setIsDropDownOpen(true);
  const handleSelect = (selectedValue) => {
    onChange(selectedValue);
    setIsDropDownOpen(false);
  };

  useEffect(() => {
    const listener = (event) => {
      const isClickMadeOutside =
        event.target !== dropDownRef.current &&
        event.target.contains(dropDownRef.current);

      if (isDropDownOpen && isClickMadeOutside) setIsDropDownOpen(false);
    };

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, [isDropDownOpen]);

  const selectedItem = expenseList.find((expense) => expense._id === value);

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
          <ExpenseItem
            icon={selectedItem?.icon || ""}
            title={selectedItem?.title || "Select Category"}
          />
        </div>

        <div
          style={{ height: isDropDownOpen ? "200px" : "0px" }}
          className="absolute w-full top-[110%] overflow-y-auto duration-300 bg-gray-800 rounded-lg"
        >
          {expenseList.map((expense, index) => (
            <ExpenseItem
              className="hover:bg-gray-700 duration-200"
              onClick={() => handleSelect(expense._id)}
              key={index}
              icon={expense.icon}
              title={expense.title}
            />
          ))}
        </div>
      </div>
      {errorMessage && (
        <div className="mt-1 text-red-500 text-xs">{errorMessage}</div>
      )}
    </InputContainer>
  );
};

export default ExpenseDropDown;
