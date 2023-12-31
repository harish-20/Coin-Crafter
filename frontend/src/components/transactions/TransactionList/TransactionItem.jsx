import DataWithLabel from "./DataWithLabel";
import Option from "./Option";

import ExampleIcon from "../../UI/Icons/BurgerMenuIcon";

const TransactionItem = (props) => {
  const { title, categoryImage, date, time, amount } = props;
  return (
    <div className="gap-2">
      <div className="flex justify-between items-center min-h-[50px]">
        <div className="bg-black rounded-full p-2">
          <ExampleIcon />
        </div>

        <div className="w-4/12">{title}</div>

        <DataWithLabel label="Date" data={date} />

        <DataWithLabel label="Time" data={time} />
        <DataWithLabel label="Amount" data={amount} />

        <Option />
      </div>
      <div>
        <h2 className="text-sm font-semibold">Description</h2>
        <p className="text-sm text-gray-400">This is a sample description</p>
      </div>
    </div>
  );
};

export default TransactionItem;
