import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Title from "../../UI/Title";
import Button from "../../UI/Button";

import { userActions } from "../../../store/slices/user/userSlice";

const LogoutModal = (props) => {
  const { className, closeModal } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userActions.resetUser());
    localStorage.removeItem("access-token");

    navigate("/");
    closeModal();
  };

  return (
    <div className={`min-w-[300px] flex flex-col gap-4 p-6 ${className}`}>
      <Title>Logout</Title>
      <p>Are You Sure Want To Logout?</p>

      <div className="flex items-center justify-between gap-3">
        <Button onClick={handleLogout}>Yes</Button>
        <Button onClick={closeModal} variant="outlined">
          No
        </Button>
      </div>
    </div>
  );
};
export default LogoutModal;
