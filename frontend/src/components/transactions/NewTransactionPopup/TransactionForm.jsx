import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ExpenseDropDown from "../../UI/InputElements/ExpenseDropDown";
import TextInput from "../../UI/InputElements/TextInput";
import TextAreaInput from "../../UI/InputElements/TextAreaInput";
import DateInput from "../../UI/InputElements/DateInput";
import TimeInput from "../../UI/InputElements/TimeInput";
import Button from "../../UI/Button";

import { popupActions } from "../../../store/slices/popup/popupSlice";
import { categoryThunks } from "../../../store/slices/category/categorySlice";
import { expenseThunks } from "../../../store/slices/expense/expenseSlice";

const TransactionForm = (props) => {
  const { className, closeModal, ...otherProps } = props;

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
      dispatch(expenseThunks.createTransaction(formData));
      dispatch(popupActions.togglePopup("none"));
    }
  };
  return (
    <div
      className={`bg-gray-900 rounded-lg flex flex-col ${className || ""}`}
      {...otherProps}
    >
      <form className="flex flex-col overflow-y-auto" onSubmit={handleSubmit}>
        <div className="px-4 flex-1 overflow-y-auto">
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
            onChange={(event) =>
              handleChange("description", event.target.value)
            }
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
              updatedTime.setHours(
                parseInt(hours, 10),
                parseInt(minutes, 10),
                0
              );
              handleChange("time", updatedTime.toISOString());
            }}
          />
        </div>

        <div className="m-4">
          <Button>Add Expense</Button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
