import LogoSpinner from "./LogoSpinner";
import TitleLoader from "./TitleLoader";
import Hints from "./Hints";

import "./SplashScreen.css";

const SplashScreen = () => {
  return (
    <div className="splash-screen h-screen translate-y-[-10%] w-full flex flex-col items-center justify-center">
      <LogoSpinner />
      <TitleLoader title="Coin Crafter" />
      <Hints />
    </div>
  );
};
export default SplashScreen;
