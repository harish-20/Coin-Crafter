import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoryItem from "./CategoryItem";
import CategoryListWithHeading from "./CategoryListWithHeading";
import AddCategoryButton from "./AddCategoryButton";

import { categoryThunks } from "../../store/slices/category/categorySlice";

const CategoryList = (props) => {
  const defaultCategories = useSelector(
    (state) => state.category.defaultCategories
  );
  const isDefaultCategoriesLoading = useSelector(
    (state) => state.category.loadingState.isDefaultCategoriesLoading
  );
  const customCategories = useSelector(
    (state) => state.category.customCategories
  );
  const isCustomCategoriesLoading = useSelector(
    (state) => state.category.loadingState.isCustomCategoriesLoading
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryThunks.getDefaultCategories());
    dispatch(categoryThunks.getCustomCategories());
  }, []);

  const defaultCategoryList = defaultCategories.map((category) => (
    <CategoryItem key={category._id} {...category} />
  ));
  const customCategoryList = customCategories.map((category) => (
    <CategoryItem key={category._id} {...category} />
  ));

  return (
    <div className="flex flex-col gap-10 my-10">
      <CategoryListWithHeading
        list={defaultCategoryList}
        heading="Default Categories"
        isLoading={isDefaultCategoriesLoading}
      />

      <CategoryListWithHeading
        list={customCategoryList}
        heading="Custom Categories"
        isLoading={isCustomCategoriesLoading}
        extraItem={<AddCategoryButton toggleForm={props.toggleForm} />}
      />
    </div>
  );
};

export default CategoryList;
