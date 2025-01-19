import React from "react";

const TermsAndPolicyLinks = (props) => {
  return (
    <div
      className={`my-10 mb-6 text-xs text-gray-500mt-8 flex items-center justify-between `}
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
