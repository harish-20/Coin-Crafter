import { useState } from "react";

import Layout from "../components/shared/Layout/Layout";
import CategoryList from "../components/categories/categoryList";
import AddCategoryForm from "../components/categories/CategoryForm/AddCategoryForm";
import Popup from "../components/popup/Popup";

const Categories = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(true);

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };
  return (
    <Layout>
      <CategoryList toggleForm={toggleForm} />

      {isFormOpen && <Popup closeModal={toggleForm} Modal={AddCategoryForm} />}
    </Layout>
  );
};

export default Categories;
