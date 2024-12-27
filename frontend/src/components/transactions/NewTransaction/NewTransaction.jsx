import Popup from "../../popup/Popup";
import TransactionForm from "./TransactionForm";
import { useDispatch, useSelector } from "react-redux";
import { popupActions } from "../../../store/slices/popupSlice";

const NewTransaction = () => {
  const currentPopup = useSelector((state) => state.popupMenu.currentPopup);

  const dispatch = useDispatch();

  const isTransactionPopupOpen = currentPopup === "transaction-popup";

  const closeForm = () => dispatch(popupActions.togglePopup("none"));

  if (!isTransactionPopupOpen) return false;

  return <Popup Modal={TransactionForm} closeModal={closeForm} />;
};
export default NewTransaction;
