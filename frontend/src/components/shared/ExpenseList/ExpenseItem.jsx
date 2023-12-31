const ExpenseItem = (props) => {
  const { id, title, category, amount, date, time } = props;

  const formattedDate = "Oct 5";
  const formattedTime = "12:00 PM";

  const dummyIcon =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUP6sdKmkPMCkho5QIKJnuCq6LiNn8I8j5ZlAVS4DkJ_ZlIU8amzsPF0UUcnqNuusUkxs&usqp=CAU";
  return (
    <div className="flex items-center gap-4">
      <div>
        <img className="h-10 w-10 rounded-full" src={dummyIcon} />
      </div>
      <div>
        <div className="">{title}</div>
        <div className="text-xs text-gray-500">
          {formattedDate} - {formattedTime}
        </div>
      </div>
      <div className="ml-auto">
        {category.expenseType === "spent" ? "-" : "+"} ₹{amount}
      </div>
    </div>
  );
};

export default ExpenseItem;
