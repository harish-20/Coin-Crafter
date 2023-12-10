import React from "react";

const SmallText = (props) => {
  return <p className="text-xs text-gray-500">{props.children}</p>;
};

export default SmallText;
