import React from "react";

import logoWithText from "../../assets/LogoText.svg";
const HeroTitle = () => {
  return (
    <div className="flex flex-col items-center gap-5 mt-10 md:mt-52">
      <img className="" src={logoWithText} alt="Logo with text" />
      <h3 className="text-gray-400 text-center max-w-[500px]">
        The ultimate tool for managing your finances. Easily track your
        expenses, subscriptions, and assets all in one place.
      </h3>
    </div>
  );
};

export default HeroTitle;
