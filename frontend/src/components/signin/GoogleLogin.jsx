import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

import { googleSignin } from "../../api/auth";

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const handleGoogleSignin = (credentials) => {
    googleSignin(credentials)
      .then((data) => {
        if (data.status === 200) navigate("/dashboard");
        else console.log("cannot login");
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
