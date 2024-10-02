import { useState } from "react";

import Popup from "../components/popup/Popup";
import Layout from "../components/shared/Layout/Layout";
import CategoryList from "../components/categories/categoryList";
import AddCategoryForm from "../components/categories/AddCategoryForm";

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
