import { useDispatch, useSelector } from "react-redux";

import Popup from "../../popup/Popup";
import DeleteExpenseModal from "./DeleteExpenseModal";

import { popupActions } from "../../../store/slices/popup/popupSlice";
import { expenseActions } from "../../../store/slices/expense/expenseSlice";

import getAvailablePopups from "../../../helpers/getAvailablePopups";

const { deleteTransactionPopup } = getAvailablePopups();

const DeleteExpensePopup = () => {
  const currentPopup = useSelector((state) => state.popup.currentPopup);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(expenseActions.setDeleteTransactionTarget({}));
    dispatch(popupActions.togglePopup("none"));
  };

  const isLogoutPopupOpen = currentPopup === deleteTransactionPopup;

  if (!isLogoutPopupOpen) return false;

  return <Popup Modal={DeleteExpenseModal} closeModal={closeModal} />;
};
export default DeleteExpensePopup;
