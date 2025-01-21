import Logo from "../UI/Icons/Logo";
import Title from "../UI/Title";
import SignupPrompt from "./SignupPrompt";

const GreetTitle = () => {
  return (
    <div className="mt-16 flex justify-between flex-wrap gap-4">
      <div className="flex items-center gap-4">
        <Logo />
        <div>
          <Title>Welcome to Coin Crafter</Title>
          <p>Log in to sync your account</p>
        </div>
      </div>

      <SignupPrompt />
    </div>
  );
};

export default GreetTitle;
