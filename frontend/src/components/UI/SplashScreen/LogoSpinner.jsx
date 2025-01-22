import OuterRingSvg from "./OuterRingSvg";
import InnerLogoSvg from "./InnerLogoSvg";

const LogoSpinner = () => {
  return (
    <div className="relative min-h-[150px] min-w-[150px]">
      <InnerLogoSvg />
      <OuterRingSvg />
    </div>
  );
};
export default LogoSpinner;
