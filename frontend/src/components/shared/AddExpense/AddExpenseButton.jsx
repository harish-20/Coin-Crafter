import { useDispatch } from "react-redux";

import Button from "../../UI/Button";

import { popupActions } from "../../../store/slices/popupSlice";

const AddExpenseButton = () => {
  const dispatch = useDispatch();

  const openTransactionPopup = () => {
    dispatch(popupActions.togglePopup("transaction-popup"));
  };
  return (
    <Button
      className="bg-gray-500 rounded-md p-2 w-max !mt-0"
      onClick={openTransactionPopup}
    >
      + Add New
    </Button>
  );
};
export default AddExpenseButton;
