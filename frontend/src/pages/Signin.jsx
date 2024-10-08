import GoogleLoginButton from "../components/signin/GoogleLogin";
import GreetTitle from "../components/signin/GreetTitle";
import SigninForm from "../components/signin/SigninForm";
import AuthContainer from "../components/UI/AuthContainer";
import SigupPrompt from "../components/signin/SigupPrompt";
import TermsDetails from "../components/signin/TermsDetails";

const Divider = () => <hr className="mt-4 mb-8 border-white" />;

const Signin = (props) => {
  return (
    <AuthContainer>
      <GreetTitle />
      <GoogleLoginButton />

      <Divider />
      <SigninForm />
      <TermsDetails />

      {/* Fixed element */}
      <SigupPrompt />
    </AuthContainer>
  );
};

export default Signin;
