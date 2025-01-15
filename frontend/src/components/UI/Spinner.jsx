import React from "react";

const Spinner = (props) => {
  const {
    className = "",
    size = 10,
    hideText = false,
    color = "white",
  } = props;
  return (
    <div
      className={`flex flex-col gap-3 items-center justify-center animate-pulse ${className}`}
    >
      <div
        style={{
          height: `${size}px`,
          width: `${size}px`,
          borderColor: color,
          borderLeftColor: "transparent",
        }}
        className="aspect-square rounded-full border-[6px] border-l-transparent animate-spin"
      ></div>
      {!hideText && <div className="font-bold">Loading...</div>}
    </div>
  );
};

export default Spinner;
