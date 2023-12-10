import { GoogleLogin } from "@react-oauth/google";

import { googleSignin } from "../../api/auth";

const GoogleLoginButton = () => {
  return (
    <div className="mx-auto w-fit mt-5">
      <GoogleLogin
        type="standard"
        theme="filled_black"
        shape="circle"
        ux_mode="popup"
        text="continue_with"
        onSuccess={googleSignin}
        useOneTap
      />
    </div>
  );
};

export default GoogleLoginButton;
