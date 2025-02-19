import { useState } from "react";
import { useDispatch } from "react-redux";

import { createCategory } from "../../api/category";

import Title from "../UI/Title";
import Button from "../UI/Button";
import IconInput from "../UI/InputElements/IconInput";
import TextInput from "../UI/InputElements/TextInput";
import ColorInput from "../UI/InputElements/ColorInput";
import ExpenseTypeInput from "../UI/InputElements/ExpenseTypeInput";

import { categoryActions } from "../../store/slices/category/categorySlice";

const intialFormData = {
  title: "",
  icon: "",
  expenseType: "",
  backgroundColor: "",
};

const AddCategoryForm = (props) => {
  const { closeModal } = props;

  const [formData, setFormData] = useState(intialFormData);
  const [formErrors, setFormErrors] = useState(intialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const dispatch = useDispatch();

  const updateFormData = (key, value) => {
    setFormErrors((prev) => ({
      ...prev,
      [key]: value.trim() ? "" : `${key} is required.`,
    }));
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateFormData(name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    setIsSubmitting(true);
    let isFormValid = true;

    for (const key of Object.keys(formData))
      if (!formData[key]) {
        isFormValid = false;
        setFormErrors((prev) => ({ ...prev, [key]: `${key} is required.` }));
      }

    if (!isFormValid) {
      setIsSubmitting(false);
      return;
    }
    try {
      const category = await createCategory(formData);
      if (category) dispatch(categoryActions.addCategory(category));
    } catch (err) {
      console.log(err);
      setIsSubmitting(false);
    }

    setIsSubmitting(false);
    props.closeModal();
  };

  return (
    <form
      className={`flex flex-col gap-2 pt-6 pb-4 px-8 overflow-y-auto ${
        props.className || ""
      }`}
      onSubmit={handleSubmit}
    >
      <Title>Add Category</Title>
      <div className="flex-1 overflow-y-auto pr-2">
        <TextInput
          value={formData.title}
          onChange={handleChange}
          id="title"
          name="title"
          label="Title"
          errorMessage={isFormSubmitted && formErrors.title}
        />

        <ExpenseTypeInput
          label="Expense Type"
          expenseType={formData.expenseType}
          setExpenseType={(type) => updateFormData("expenseType", type)}
          errorMessage={isFormSubmitted && formErrors.expenseType}
        />

        <IconInput
          label="Icon"
          icon={formData.icon}
          setIcon={(icon) => updateFormData("icon", icon)}
          errorMessage={isFormSubmitted && formErrors.icon}
        />

        <ColorInput
          label="Color"
          color={formData.backgroundColor}
          setColor={(color) => updateFormData("backgroundColor", color)}
          errorMessage={isFormSubmitted && formErrors.backgroundColor}
        />
      </div>

      <div className="mt-4 flex gap-2">
        <Button variant="outlined" type="button" onClick={closeModal}>
          Cancel
        </Button>
        <Button isLoading={isSubmitting} className="rounded-full bg-dark">
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddCategoryForm;
