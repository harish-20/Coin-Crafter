import IncomeIcon from "../UI/Icons/IncomeIcon";
import SpentIcon from "../UI/Icons/SpentIcon";
import FakeIcon from "./fakeIcon";

const CategoryItem = (props) => {
  const { title, icon, iconColor, backgroundColor, expenseType } = props;

  return (
    <div
      className="relative min-w-[150px] aspect-square rounded-xl flex flex-col items-center transition-transform duration-200 hover:scale-105"
      style={{ backgroundColor: "purple" }}
    >
      <div className="absolute top-3 right-3">
        {expenseType === "income" ? <IncomeIcon /> : <SpentIcon />}
      </div>
      <div className="h-[70%] flex items-center justify-center">
        <FakeIcon />
      </div>
      <div>{title}</div>
    </div>
  );
};

export default CategoryItem;
