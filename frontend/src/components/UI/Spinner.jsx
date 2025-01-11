import React from "react";

const Spinner = (props) => {
  return (
    <div
      className={`flex flex-col gap-3 items-center justify-center animate-pulse ${
        props.className || ""
      }`}
    >
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
        className="aspect-square rounded-full border-[6px] border-white border-l-transparent animate-spin"
      ></div>
      <div className="font-bold">Loading...</div>
    </div>
  );
};

export default Spinner;
