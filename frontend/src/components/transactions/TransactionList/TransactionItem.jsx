import DataWithLabel from "./DataWithLabel";

import ExampleIcon from "../../UI/Icons/BurgerMenuIcon";

const TransactionItem = (props) => {
  const { title, categoryImage, date, time, amount, selectTransaction } = props;
  return (
    <div
      className="gap-2 cursor-pointer p-2 pb-4 duration-150 hover:bg-slate-800 rounded-lg"
      onClick={() => selectTransaction("something for now(id)")}
    >
      <div className="flex justify-between items-center min-h-[50px] flex-wrap">
        <div className="bg-black rounded-full p-2">
          <ExampleIcon />
        </div>

        <div className="w-4/12">{title}</div>

        <DataWithLabel label="Date" data={date} />
        <DataWithLabel label="Time" data={time} />
        <DataWithLabel label="Amount" data={amount} />
      </div>
      <div>
        <h2 className="text-sm font-semibold">Description</h2>
        <p className="text-sm text-gray-400">This is a sample description</p>
      </div>
    </div>
  );
};

export default TransactionItem;
