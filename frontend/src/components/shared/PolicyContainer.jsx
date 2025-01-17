import React from "react";

const PolicyContainer = (props) => {
  return (
    <div className="fixed bottom-2 left-0 right-0 w-[90%] mx-auto md:w-[500px] sm:w-[400px]">
      {props.children}
    </div>
  );
};

export default PolicyContainer;
