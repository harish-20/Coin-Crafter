import CategoryItem from "./CategoryItem";
import CategoryListWithHeading from "./CategoryListWithHeading";
import AddCategoryButton from "./AddCategoryButton";

const categoryList = [
  {
    title: "Salary",
    icon: "fa-money",
    iconColor: "#00ff00",
    backgroundColor: "#ffffff",
    expenseType: "income",
  },
  {
    title: "Groceries",
    icon: "fa-shopping-cart",
    iconColor: "#ff0000",
    backgroundColor: "#f0f0f0",
    expenseType: "spend",
  },
  {
    title: "Rent",
    icon: "fa-home",
    iconColor: "#0000ff",
    backgroundColor: "#cccccc",
    expenseType: "spend",
  },
  {
    title: "Utilities",
    icon: "fa-bolt",
    iconColor: "#ffff00",
    backgroundColor: "#333333",
    expenseType: "spend",
  },
  {
    title: "Dining Out",
    icon: "fa-cutlery",
    iconColor: "#ff9900",
    backgroundColor: "#f5f5f5",
    expenseType: "spend",
  },
  {
    title: "Entertainment",
    icon: "fa-ticket",
    iconColor: "#9900cc",
    backgroundColor: "#e6e6e6",
    expenseType: "spend",
  },
  {
    title: "Healthcare",
    icon: "fa-medkit",
    iconColor: "#33cc33",
    backgroundColor: "#f9f9f9",
    expenseType: "spend",
  },
  {
    title: "Travel",
    icon: "fa-plane",
    iconColor: "#3366ff",
    backgroundColor: "#d9edf7",
    expenseType: "spend",
  },
];

const CategoryList = (props) => {
  const defaultCategories = categoryList.map((category) => (
    <CategoryItem key={category.title} {...category} />
  ));

  return (
    <div className="flex flex-col gap-10 mt-10  mx-[5%]">
      <CategoryListWithHeading
        list={defaultCategories}
        heading="Default Categories"
      />
      <CategoryListWithHeading
        list={defaultCategories}
        heading="Custom Categories"
        extraItem={<AddCategoryButton toggleForm={props.toggleForm} />}
      />
    </div>
  );
};

export default CategoryList;
