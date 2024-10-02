import React from "react";

const Spinner = (props) => {
  return (
    <div className="flex items-center justify-center">
      <div
        style={{
          ...(props.size
            ? {
                height: `${props.size}px`,
                width: `${props.size}px`,
              }
            : {
                height: "10px",
                width: "10px",
              }),
        }}
        className="aspect-square rounded-full border-[3px] border-white border-l-transparent animate-spin"
      ></div>
    </div>
  );
};

export default Spinner;
