import GreetTitle from "../components/signin/GreetTitle";
import GoogleLoginButton from "../components/signin/GoogleLogin";
import Divider from "../components/UI/Divider";
import SigninForm from "../components/signin/SigninForm";
import AuthContainer from "../components/UI/AuthContainer";
import TermsDetails from "../components/signin/TermsDetails";

const Signin = (props) => {
  return (
    <AuthContainer>
      <GreetTitle />
      <GoogleLoginButton />

      <Divider />
      <SigninForm />
      <TermsDetails />
    </AuthContainer>
  );
};

export default Signin;
