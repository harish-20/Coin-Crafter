import React from "react";
import ExpenseDropDown from "../../UI/InputElements/ExpenseDropDown";
import TextInput from "../../UI/InputElements/TextInput";
import TextAreaInput from "../../UI/InputElements/TextAreaInput";
import DateInput from "../../UI/InputElements/DateInput";
import TimeInput from "../../UI/InputElements/TimeInput";
import Button from "../../UI/Button";

// we can use this form for both update and creating an expense
const TransactionForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="p-10 h-full overflow-auto">
      <form className="" onSubmit={handleSubmit}>
        <ExpenseDropDown label="Expense" />

        <TextInput id="amount" label="Amount" />

        <TextAreaInput id="description" label="Description" rows={5} />

        <DateInput id="date" label="Date" />

        <TimeInput id="time" label="Time" />

        <Button className="">Edit Expense</Button>
      </form>
    </div>
  );
};

export default TransactionForm;
