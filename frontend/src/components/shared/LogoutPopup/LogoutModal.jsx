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
    <div
      className={`min-w-[300px] flex flex-col justify-between p-6 ${className}`}
    >
      <Title>Logout</Title>
      <p className="mt-4">Are you sure want to logout?</p>

      <div className="flex items-center justify-between mt-12 gap-3">
        <Button onClick={handleLogout}>Yes</Button>
        <Button onClick={closeModal} variant="outlined">
          No
        </Button>
      </div>
    </div>
  );
};
export default LogoutModal;
