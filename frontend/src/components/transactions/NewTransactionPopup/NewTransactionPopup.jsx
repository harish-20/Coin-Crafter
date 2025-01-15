import { useDispatch, useSelector } from "react-redux";

import Popup from "../../popup/Popup";
import TransactionForm from "./TransactionForm";

import { popupActions } from "../../../store/slices/popup/popupSlice";

import getAvailablePopups from "../../../helpers/getAvailablePopups";

const { newTransactionPopup } = getAvailablePopups();

const NewTransactionPopup = () => {
  const currentPopup = useSelector((state) => state.popup.currentPopup);

  const dispatch = useDispatch();

  const isTransactionPopupOpen = currentPopup === newTransactionPopup;

  const closeForm = () => dispatch(popupActions.togglePopup("none"));

  if (!isTransactionPopupOpen) return false;

  return <Popup Modal={TransactionForm} closeModal={closeForm} />;
};
export default NewTransactionPopup;
