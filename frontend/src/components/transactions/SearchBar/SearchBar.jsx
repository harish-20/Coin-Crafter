import { useDispatch } from "react-redux";
import { popupActions } from "../../../store/slices/popupSlice";
import PlusIcon from "../../UI/Icons/PlusIcon";

const SearchBar = () => {
  const dispatch = useDispatch();

  const openTransactionPopup = () =>
    dispatch(popupActions.togglePopup("transaction-popup"));
  return (
    <div className="flex w-full">
      <input
        className="w-full mx-4 my-5 px-5 py-3 bg-gray-800 rounded-full placeholder:text-center placeholder:tracking-wider  focus:outline-none"
        placeholder="Search for transaction"
        type="text"
      />

      <button onClick={openTransactionPopup}>
        <PlusIcon className="w-8 h-8" />
      </button>
    </div>
  );
};

export default SearchBar;
