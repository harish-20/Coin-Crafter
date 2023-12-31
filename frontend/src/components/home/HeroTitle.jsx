import React from "react";

import logoWithText from "../../assets/LogoText.svg";
const HeroTitle = () => {
  return (
    <div className="mt-52 flex flex-col items-center gap-5">
      <img className="" src={logoWithText} alt="Logo with text" />
      <h3 className="text-gray-400">
        The ultimate tool for managing your finances. Easily track your
        expenses, subscriptions, and assets all in one place.
      </h3>
    </div>
  );
};

export default HeroTitle;
