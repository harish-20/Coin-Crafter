import React from "react";

import ExpenseTypeFilters from "./ExpenseTypeFilters";
import ExpenseDropDown from "../../UI/InputElements/ExpenseDropDown";

const Filters = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <h3 className="text-lg mt-6 mr-6">Filters :</h3>
        <ExpenseDropDown
          label=""
          value=""
          onChange={() => {}}
          expenseList={[]}
        />
        <ExpenseTypeFilters expenseType={null} onChange={() => {}} />
      </div>

      <div className="flex items-center">
        <h3 className="text-lg mt-6 mr-6">Sort :</h3>
        <ExpenseDropDown
          label=""
          value=""
          onChange={() => {}}
          expenseList={[]}
        />
        <ExpenseTypeFilters expenseType={null} onChange={() => {}} />
      </div>
    </div>
  );
};

export default Filters;
