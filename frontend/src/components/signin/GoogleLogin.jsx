import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

import { googleSignin } from "../../api/auth";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/slices/user/userSlice";
import ErrorText from "../UI/ErrorText";

const GoogleLoginButton = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleGoogleSignin = async (credentials) => {
    try {
      setError(false);
      const data = await googleSignin(credentials);

      dispatch(userActions.setUser(data.user));
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="mx-auto w-fit mt-5 text-center">
      <GoogleLogin
        type="standard"
        theme="filled_black"
        shape="circle"
        ux_mode="popup"
        text="continue_with"
        onSuccess={handleGoogleSignin}
        useOneTap
      />
      {error && <ErrorText>Login failed. Try again</ErrorText>}
    </div>
  );
};

export default GoogleLoginButton;
