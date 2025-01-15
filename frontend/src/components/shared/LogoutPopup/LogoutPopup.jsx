import { useDispatch, useSelector } from "react-redux";

import Popup from "../../popup/Popup";
import LogoutModal from "./LogoutModal";

import { popupActions } from "../../../store/slices/popup/popupSlice";

import getAvailablePopups from "../../../helpers/getAvailablePopups";

const { logoutPopup } = getAvailablePopups();

const LogoutPopup = () => {
  const currentPopup = useSelector((state) => state.popup.currentPopup);

  const dispatch = useDispatch();

  const closeModal = () => dispatch(popupActions.togglePopup("none"));

  const isLogoutPopupOpen = currentPopup === logoutPopup;

  if (!isLogoutPopupOpen) return false;

  return <Popup Modal={LogoutModal} closeModal={closeModal} />;
};
export default LogoutPopup;
