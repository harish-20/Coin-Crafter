import React from "react";

import SmallText from "../SmallText";

const PolicyLink = (props) => (
  <a className="mx-1 underline font-semibold" href="/">
    {props.children}
  </a>
);

const PolicyLabel = (props) => (
  <label htmlFor={props.id} className="ml-4 tracking-wide select-none">
    <SmallText>
      I agree to the <PolicyLink>Terms of Service</PolicyLink> and
      <PolicyLink>Privacy Policy </PolicyLink>
    </SmallText>
  </label>
);

const PoliciesCheckbox = (props) => {
  const { register, id, errorMessage } = props;
  return (
    <>
      <div className="flex mt-4">
        <input
          id={id}
          {...register}
          className="bg-transparent accent-slate-600"
          type="checkbox"
        />
        <PolicyLabel id={id} />
      </div>
      {errorMessage && (
        <div className="mt-1 text-red-500 text-xs">{errorMessage}</div>
      )}
    </>
  );
};

export default PoliciesCheckbox;
