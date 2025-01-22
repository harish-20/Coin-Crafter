const OuterRingSvg = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="90"
        height="90"
        viewBox="0 0 60 60"
        fill="none"
        className="outer-ring"
      >
        <path
          d="M27.1765 54C15.481 54 6 45.0457 6 34"
          stroke="#D94E33"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M32 6C43.6954 6 53.1765 14.9543 53.1765 26"
          stroke="#64927C"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="20" cy="6" r="3.5" fill="#FAFAFA" stroke="#FAFAFA" />
        <circle cx="40" cy="54" r="4" fill="#FAFAFA" />
      </svg>
    </div>
  );
};
export default OuterRingSvg;
