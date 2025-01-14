import { useDispatch, useSelector } from "react-redux";

import AddExpenseButton from "../../shared/AddExpense/AddExpenseButton";

import { expenseActions } from "../../../store/slices/expense/expenseSlice";

const SearchBar = () => {
  const search = useSelector((state) => state.expense.search);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(expenseActions.setSearch(value));
  };
  return (
    <div className="flex w-full items-center">
      <AddExpenseButton />

      <input
        className="flex-1 mx-4 my-5 px-5 py-3 bg-gray-800 rounded-full placeholder:text-center placeholder:tracking-wider  focus:outline-none"
        placeholder="🔍 Search for transaction"
        type="text"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
