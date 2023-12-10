import React from "react";

const PolicyContainer = (props) => {
  return (
    <div className="fixed bottom-2 left-0 right-0 w-10/12 md:w-2/6 mx-auto">
      {props.children}
    </div>
  );
};

export default PolicyContainer;
