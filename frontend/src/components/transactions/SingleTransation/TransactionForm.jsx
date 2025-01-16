import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ExpenseDropDown from "../../UI/InputElements/ExpenseDropDown";
import TextInput from "../../UI/InputElements/TextInput";
import TextAreaInput from "../../UI/InputElements/TextAreaInput";
import DateInput from "../../UI/InputElements/DateInput";
import TimeInput from "../../UI/InputElements/TimeInput";
import Spinner from "../../UI/Spinner";
import Button from "../../UI/Button";

import { expenseThunks } from "../../../store/slices/expense/expenseSlice";

import { getSingleExpense } from "../../../api/expense";

// used this form for both update and creating an expense
const TransactionForm = () => {
  const defaultCategories = useSelector(
    (state) => state.category.defaultCategories
  );
  const customCategories = useSelector(
    (state) => state.category.customCategories
  );
  const expenseOnEditMode = useSelector(
    (state) => state.expense.expenseOnEditMode
  );

  const [formData, setFormData] = useState({
    category: "",
    amount: "",
    description: "",
    date: new Date(),
    time: new Date(),
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    category: false,
    amount: false,
    description: false,
    date: false,
    time: false,
  });
  const [isFormDataFetching, setIsFormDataFetching] = useState(false);

  const dispatch = useDispatch();

  const populateValuesForEditMode = async () => {
    try {
      setIsFormDataFetching(true);
      const result = await getSingleExpense(expenseOnEditMode);

      setFormData({
        category: result.category,
        amount: result.amount,
        description: result.shortNote,
        date: result.date,
        time: result.time,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsFormDataFetching(false);
    }
  };

  useEffect(() => {
    if (expenseOnEditMode) populateValuesForEditMode();
  }, [expenseOnEditMode]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setFormErrors((prev) => ({ ...prev, [key]: !value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);

    // validations
    const collectedFormErrors = {};
    let hasError = false;
    for (const key of Object.keys(formData)) {
      if (!formData[key]) hasError = true;
      collectedFormErrors[key] = !formData[key];
    }
    if (hasError) {
      setFormErrors(collectedFormErrors);
    } else {
      const updatedExpense = {
        _id: expenseOnEditMode,
        category: formData.category,
        amount: formData.amount,
        description: formData.description,
        date: formData.date,
        time: formData.time,
      };
      dispatch(expenseThunks.updateTransaction(updatedExpense));
    }
  };

  if (isFormDataFetching)
    return (
      <div className="flex justify-center h-full">
        <Spinner size={40} />
      </div>
    );

  return (
    <div className="p-10 h-full overflow-auto">
      <form className="" onSubmit={handleSubmit}>
        <ExpenseDropDown
          label="Category"
          value={formData.category}
          onChange={(value) => handleChange("category", value)}
          expenseList={[...defaultCategories, ...customCategories]}
          errorMessage={
            isFormSubmitted && formErrors.expense && "Select a expense type"
          }
        />

        <TextInput
          id="amount"
          label="Amount"
          value={formData.amount}
          onChange={(event) => handleChange("amount", event.target.value)}
          errorMessage={
            isFormSubmitted && formErrors.amount && "Enter a valid amount"
          }
        />

        <TextAreaInput
          id="description"
          label="Description"
          rows={5}
          value={formData.description}
          onChange={(event) => handleChange("description", event.target.value)}
          errorMessage={
            isFormSubmitted &&
            formErrors.description &&
            "Enter a valid description"
          }
        />

        <DateInput
          id="date"
          label="Date"
          value={formData.date}
          onChange={(event) => handleChange("date", event.target.value)}
        />

        <TimeInput
          id="time"
          label="Time"
          value={formData.time}
          onChange={(event) => {
            const [hours, minutes] = event.target.value.split(":");
            const updatedTime = new Date();
            updatedTime.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0);
            handleChange("time", updatedTime.toISOString());
          }}
        />

        <Button className="">Edit Expense</Button>
      </form>
    </div>
  );
};

export default TransactionForm;
