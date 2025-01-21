import { useState } from "react";

import ProfileImage from "./ProfileImage";
import NavLinks from "./NavLinks";
import LogoutButton from "./LogoutButton";
import MobileNavButton from "../MobileNavButton";
import BackDrop from "../BackDrop";

const SidePanel = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };
  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <div className={getSidePanelClasses(isNavOpen)}>
        <ProfileImage />
        <NavLinks closeNav={closeNav} />

        <LogoutButton closeNav={closeNav} />
      </div>

      {/* navbar for mobile view */}
      {isNavOpen ? (
        <BackDrop onClick={closeNav} />
      ) : (
        <MobileNavButton onClick={toggleNav} />
      )}
    </>
  );
};

export default SidePanel;

function getSidePanelClasses(isNavOpen) {
  return `z-50 flex flex-col justify-between items-center 
  p-6 m-4 mr-0 w-8/12 h-[95%] bg-dark rounded-xl 
  duration-300 fixed top-0 left-0 
  ${isNavOpen ? "translate-x-0" : "translate-x-[-150%]"} 
  min-w-[240px] 
  sm:w-6/12 
  md:z-0 md:w-[15%] md:static md:translate-x-0 md:h-auto`;
}
