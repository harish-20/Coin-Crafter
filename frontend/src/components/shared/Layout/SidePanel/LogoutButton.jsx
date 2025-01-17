import { useDispatch } from "react-redux";

import Button from "../../../UI/button";

import { popupActions } from "../../../../store/slices/popup/popupSlice";

import logoutIcon from "../../../../assets/logout.png";

import getAvailablePopups from "../../../../helpers/getAvailablePopups";

const { logoutPopup } = getAvailablePopups();

const LogoutButton = (props) => {
  const { closeNav } = props;

  const dispatch = useDispatch();

  const openLogoutPopup = () => {
    closeNav();
    dispatch(popupActions.togglePopup(logoutPopup));
  };
  return (
    <Button onClick={openLogoutPopup}>
      <div className="flex gap-3 justify-center text-inherit">
        <img className="" src={logoutIcon} alt="logout" />
        Logout
      </div>
    </Button>
  );
};

export default LogoutButton;
