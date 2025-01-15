import React from "react";

const Spinner = (props) => {
  const { className, size, hideText } = props;
  return (
    <div
      className={`flex flex-col gap-3 items-center justify-center animate-pulse ${
        className || ""
      }`}
    >
      <div
        style={{
          ...(size
            ? {
                height: `${size}px`,
                width: `${size}px`,
              }
            : {
                height: "10px",
                width: "10px",
              }),
        }}
        className="aspect-square rounded-full border-[6px] border-white border-l-transparent animate-spin"
      ></div>
      {!hideText && <div className="font-bold">Loading...</div>}
    </div>
  );
};

export default Spinner;
