import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ExpenseDropDown from "../../UI/InputElements/ExpenseDropDown";
import TextInput from "../../UI/InputElements/TextInput";
import TextAreaInput from "../../UI/InputElements/TextAreaInput";
import DateInput from "../../UI/InputElements/DateInput";
import TimeInput from "../../UI/InputElements/TimeInput";
import Button from "../../UI/Button";

import categoryThunks from "../../../store/slices/category/thunks";

// used this form for both update and creating an expense
const TransactionForm = () => {
  const defaultCategories = useSelector(
    (state) => state.category.defaultCategories
  );
  const customCategories = useSelector(
    (state) => state.category.customCategories
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

  const dispatch = useDispatch();

  // fetch these categories inorder to show the available category in expense form
  useEffect(() => {
    dispatch(categoryThunks.getDefaultCategories());
    dispatch(categoryThunks.getCustomCategories());
  }, []);

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
      // submit the form
      console.table(formData);
    }
  };
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
