import DataWithLabel from "./DataWithLabel";

import FakeIcon from "../../categories/fakeIcon";
import icons from "../../UI/CategoryIcon";

const TransactionItem = (props) => {
  const {
    id,
    category,
    date,
    time,
    amount,
    selectTransaction,
    selectedTransaction,
  } = props;

  const isSelectedTransaction = selectedTransaction === id;
  const Icon = icons[category.icon] || FakeIcon;

  const readableDate = new Date(date).toLocaleDateString();
  return (
    <div
      className={`gap-2 cursor-pointer p-4 duration-150 rounded-lg ${
        isSelectedTransaction ? "bg-slate-700" : "hover:bg-slate-800"
      }`}
      onClick={() => selectTransaction(id)}
    >
      <div className="flex justify-between items-start min-h-[50px] flex-wrap">
        <div className="bg-gray-100 rounded-full p-2">
          <Icon />
        </div>

        <div className="w-4/12">{category.title}</div>

        <DataWithLabel label="Date" data={readableDate || "-"} />
        <DataWithLabel label="Time" data={time || "-"} />
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
