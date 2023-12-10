import Logo from "../UI/Icons/Logo";
import Title from "../UI/Title";

const WelcomeText = () => (
  <div>
    <Title>Welcome to Coin Crafter</Title>
    <p>Log in to sync your account</p>
  </div>
);

const GreetTitle = () => {
  return (
    <div className="flex gap-4">
      <Logo />
      <WelcomeText />
    </div>
  );
};

export default GreetTitle;
