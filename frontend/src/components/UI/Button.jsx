import { Link } from "react-router-dom";

const white =
  "bg-white text-zinc-900 focus:shadow-white focus:shadow-md transition-all duration-200 hover:bg-gray-200";

const Button = (props) => {
  const classList = `relative mt-8 py-2 w-full text-center font-bold rounded-full ${white}  focus:outline-none disabled:bg-gray-300 ${props.className}`;

  if (props.href) {
    return (
      <Link to={props.href} className={classList}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classList} disabled={props.disabled || props.isLoading}>
      {props.isLoading && (
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-[#0004]">
          <div className="h-5/6 aspect-square rounded-full border-4 border-white border-r-[#fff4] animate-spin"></div>
        </div>
      )}
      {props.children}
    </button>
  );
};

export default Button;
