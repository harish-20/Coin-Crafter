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
import Title from "../../UI/Title";

const TransactionForm = (props) => {
  const { className, closeModal, ...otherProps } = props;

  const defaultCategories = useSelector(
    (state) => state.category.defaultCategories
  );
  const customCategories = useSelector(
    (state) => state.category.customCategories
  );
  const isExpenseAdding = useSelector(
    (state) => state.expense.loadingState.isExpenseAdding
  );
  const isExpenseAddingError = useSelector(
    (state) => state.expense.errorState.isExpenseAddingError
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

  const handleSubmit = async (event) => {
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
      try {
        await dispatch(expenseThunks.createTransaction(formData)).unwrap();
        dispatch(popupActions.togglePopup("none"));
      } catch (error) {
        console.log("Cannot add transaction");
      }
    }
  };
  return (
    <div
      className={`px-8 py-6 flex flex-col ${className || ""}`}
      {...otherProps}
    >
      <Title>Add Transaction</Title>
      <form
        className="pt-3 flex flex-col overflow-y-hidden"
        onSubmit={handleSubmit}
      >
        <div className="flex-1 overflow-y-auto pr-2">
          <ExpenseDropDown
            label="Category"
            value={formData.category}
            onChange={(value) => handleChange("category", value)}
            expenseList={[...defaultCategories, ...customCategories]}
            errorMessage={
              isFormSubmitted && formErrors.category && "Select a category"
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

        <div className="mt-4">
          {isExpenseAddingError && (
            <p className="my-2 text-sm text-center text-red-500">
              Cannot add transaction. Try again.
            </p>
          )}
          <div className="flex gap-2">
            <Button variant="outlined" type="button" onClick={closeModal}>
              Cancel
            </Button>
            <Button isLoading={isExpenseAdding}>Add</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
