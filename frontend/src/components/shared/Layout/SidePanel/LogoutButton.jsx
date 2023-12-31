import Button from "../../../UI/button";

import logoutIcon from "../../../../assets/logout.png";

const LogoutButton = () => {
  return (
    <Button>
      <div className="flex gap-3 justify-center text-inherit">
        <img className="" src={logoutIcon} alt="logout" />
        Logout
      </div>
    </Button>
  );
};

export default LogoutButton;
