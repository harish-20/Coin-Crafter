import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

import { googleSignin } from "../../api/auth";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/slices/user/userSlice";

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleGoogleSignin = (credentials) => {
    googleSignin(credentials)
      .then((data) => {
        if (data.user) {
          dispatch(userActions.setUser(data.user));
          navigate("/dashboard", { replace: true });
        } else console.log("cannot login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mx-auto w-fit mt-5">
      <GoogleLogin
        type="standard"
        theme="filled_black"
        shape="circle"
        ux_mode="popup"
        text="continue_with"
        onSuccess={handleGoogleSignin}
        useOneTap
      />
    </div>
  );
};

export default GoogleLoginButton;
