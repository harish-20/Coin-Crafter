import { useState } from "react";

import Popup from "../components/popup/Popup";
import CategoryList from "../components/categories/CategoryList";
import AddCategoryForm from "../components/categories/AddCategoryForm";

const Categories = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };
  return (
    <div>
      <CategoryList toggleForm={toggleForm} />

      {isFormOpen && <Popup closeModal={toggleForm} Modal={AddCategoryForm} />}
    </div>
  );
};

export default Categories;
