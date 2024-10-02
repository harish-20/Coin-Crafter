import { useState } from "react";

import Button from "../UI/Button";
import IconInput from "../UI/InputElements/IconInput";
import TextInput from "../UI/InputElements/TextInput";
import ColorInput from "../UI/InputElements/ColorInput";
import ExpenseTypeInput from "../UI/InputElements/ExpenseTypeInput";

const intialFormData = {
  title: "",
  icon: "",
  type: "",
  color: "",
};

const AddCategoryForm = (props) => {
  const [formData, setFormData] = useState(intialFormData);

  const updateFormData = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateFormData(name, value);
  };

  /*
  title
  icon
  type
  color
  */

  return (
    <form className={`py-2 ${props.className || ""}`}>
      <div className="px-4 max-h-[500px] overflow-y-scroll">
        <TextInput
          value={formData.title}
          onChange={handleChange}
          id="title"
          name="title"
          label="Title"
        />

        <h2 className="mt-4 mb-2">Expense Type</h2>
        <ExpenseTypeInput
          expenseType={formData.type}
          setExpenseType={(type) => updateFormData("type", type)}
        />

        <h2 className="mt-4 mb-2 ">Display Icon</h2>
        <IconInput
          icon={formData.icon}
          setIcon={(icon) => updateFormData("icon", icon)}
        />

        <h2 className="mt-4 mb-2">Color</h2>
        <ColorInput
          color={formData.color}
          setColor={(color) => updateFormData("color", color)}
        />
      </div>

      <div className="px-4">
        <Button className="rounded-lg bg-dark">Add Category</Button>
      </div>
    </form>
  );
};

export default AddCategoryForm;
