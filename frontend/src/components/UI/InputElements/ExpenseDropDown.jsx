import { useEffect, useRef, useState } from "react";

import Label from "../Label";
import InputContainer from "./InputContainer";

import icons from "../CategoryIcon";
import SpentIcon from "../Icons/SpentIcon";
import IncomeIcon from "../Icons/IncomeIcon";

const ExpenseItem = (props) => {
  return (
    <div
      className={`flex items-center gap-4 py-3 px-6 cursor-pointer ${
        props.className || ""
      }`}
      onClick={props.onClick}
      data-testid={props.title}
    >
      <div
        style={{ background: props.backgroundColor }}
        className="h-2 w-2 rounded-full"
      ></div>
      {props.icon && icons[props.icon]()}
      <div>{props.title}</div>
      <div className="ml-auto">
        {props.expenseType === "spend" && <SpentIcon />}
        {props.expenseType === "income" && <IncomeIcon />}
      </div>
    </div>
  );
};

const ExpenseDropDown = (props) => {
  const {
    label,
    value,
    className,
    onChange,
    expenseList,
    errorMessage,
    "data-test": dataTest,
  } = props;

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
        !dropDownRef.current.contains(event.target);

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
      <Label label={label} />

      <div className="relative mt-3">
        <div
          ref={dropDownRef}
          className={`border rounded-lg duration-200 ${
            isDropDownOpen ? "border-gray-400" : "border-gray-700"
          } ${className || ""}`}
          onClick={openDropDown}
          tabIndex={1}
          data-test={dataTest || ""}
        >
          <ExpenseItem
            icon={selectedItem?.icon || ""}
            title={selectedItem?.title || "Select Category"}
            backgroundColor={selectedItem?.backgroundColor}
            expenseType={selectedItem?.expenseType}
          />
        </div>

        <div
          style={{ height: isDropDownOpen ? "200px" : "0px" }}
          className="absolute z-10 w-full top-[110%] overflow-y-auto duration-300 bg-gray-800 rounded-lg"
          data-test="category-dropdown-list"
        >
          {expenseList.map((expense, index) => (
            <ExpenseItem
              className="hover:bg-gray-700 duration-200"
              onClick={() => handleSelect(expense._id)}
              key={index}
              icon={expense.icon}
              title={expense.title}
              backgroundColor={expense.backgroundColor}
              expenseType={expense.expenseType}
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
