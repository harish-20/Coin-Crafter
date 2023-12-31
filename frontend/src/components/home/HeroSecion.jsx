import HeroTitle from "./HeroTitle";
import CTA from "./CTA";
import HomepageImage from "./HomepageImage";

const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <HeroTitle />
      <CTA />
      <HomepageImage />
    </div>
  );
};

export default HeroSection;
