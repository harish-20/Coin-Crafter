import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as categoryThunks from "../../store/slices/category/thunks";

import CategoryItem from "./CategoryItem";
import CategoryListWithHeading from "./CategoryListWithHeading";
import AddCategoryButton from "./AddCategoryButton";

const CategoryList = (props) => {
  const defaultCategories = useSelector(
    (state) => state.category.defaultCategories
  );
  const isDefaultCategoriesLoading = useSelector(
    (state) => state.category.loadingState.isDefaultCategoriesLoading
  );

  console.log(defaultCategories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryThunks.getDefaultCategories());
  }, []);

  const defaultCategoryList = defaultCategories.map((category) => (
    <CategoryItem key={category.title} {...category} />
  ));

  return (
    <div className="flex flex-col gap-10 my-10  mx-[5%]">
      <CategoryListWithHeading
        list={defaultCategoryList}
        heading="Default Categories"
        isLoading={isDefaultCategoriesLoading}
      />

      <CategoryListWithHeading
        list={defaultCategoryList}
        heading="Custom Categories"
        extraItem={<AddCategoryButton toggleForm={props.toggleForm} />}
      />
    </div>
  );
};

export default CategoryList;
