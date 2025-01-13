import AddExpenseButton from "../../shared/AddExpense/AddExpenseButton";

const SearchBar = () => {
  return (
    <div className="flex w-full items-center">
      <AddExpenseButton />

      <input
        className="flex-1 mx-4 my-5 px-5 py-3 bg-gray-800 rounded-full placeholder:text-center placeholder:tracking-wider  focus:outline-none"
        placeholder="Search for transaction"
        type="text"
      />
    </div>
  );
};

export default SearchBar;
