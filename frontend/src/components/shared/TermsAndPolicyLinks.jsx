import React from "react";

const TermsAndPolicyLinks = (props) => {
  return (
    <div
      className={`mt-6 text-xs text-gray-500mt-8 flex items-center justify-between ${
        props.fixedBottom
          ? "fixed bottom-2 left-0 right-0 mx-auto w-[90%] md:w-[30%] sm:[60%] "
          : ""
      }`}
    >
      <div>
        <a href="#" className="text-gray-500">
          Need Help ?
        </a>
      </div>
      <div>
        <a href="#" className="text-gray-500">
          Privacy & Terms
        </a>
      </div>
      <div className="text-gray-500">©️Coin Crafter</div>
    </div>
  );
};

export default TermsAndPolicyLinks;
