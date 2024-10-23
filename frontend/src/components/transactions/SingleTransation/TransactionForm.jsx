import { useState } from "react";
import { useSelector } from "react-redux";

import ExpenseDropDown from "../../UI/InputElements/ExpenseDropDown";
import TextInput from "../../UI/InputElements/TextInput";
import TextAreaInput from "../../UI/InputElements/TextAreaInput";
import DateInput from "../../UI/InputElements/DateInput";
import TimeInput from "../../UI/InputElements/TimeInput";
import Button from "../../UI/Button";

// we can use this form for both update and creating an expense
const TransactionForm = () => {
  const defaultCategories = useSelector(
    (state) => state.category.defaultCategories
  );
  const customCategories = useSelector(
    (state) => state.category.customCategories
  );

  const [formData, setFormData] = useState({
    expense: "",
    amount: "",
    description: "",
    date: new Date(),
    time: new Date(),
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="p-10 h-full overflow-auto">
      <form className="" onSubmit={handleSubmit}>
        <ExpenseDropDown
          label="Expense"
          value={formData.expense}
          onChange={(value) => handleChange("expense", value)}
          expenseList={[...defaultCategories, ...customCategories]}
        />

        <TextInput
          id="amount"
          label="Amount"
          onChange={(event) => handleChange("amount", event.target.value)}
        />

        <TextAreaInput
          id="description"
          label="Description"
          rows={5}
          onChange={(event) => handleChange("time", event.target.value)}
        />

        <DateInput
          id="date"
          label="Date"
          onChange={(event) => handleChange("date", event.target.value)}
        />

        <TimeInput
          id="time"
          label="Time"
          onChange={(event) => {
            console.log(event.target);
            handleChange("time", event.target.value);
          }}
        />

        <Button className="">Edit Expense</Button>
      </form>
    </div>
  );
};

export default TransactionForm;
