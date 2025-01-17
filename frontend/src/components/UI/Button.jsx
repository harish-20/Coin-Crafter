import { Link } from "react-router-dom";

const white =
  "bg-white text-zinc-900 focus:shadow-white focus:shadow-md transition-all duration-200 hover:bg-gray-200";

const outlined =
  "bg-transparent text-white border-2 border-white focus:shadow-white focus:shadow-md transition-all duration-200 hover:bg-white hover:text-black";

const Button = (props) => {
  const {
    className,
    href,
    children,
    disabled,
    isLoading,
    variant = "default",
    ...otherProps
  } = props;

  const variantClass = variant === "outlined" ? outlined : white;

  const classList = `relative py-2 px-4 w-full text-center font-bold rounded-full ${variantClass} focus:outline-none disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 ${className}`;

  if (href) {
    return (
      <Link to={href} className={classList}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classList}
      disabled={disabled || isLoading}
      {...otherProps}
    >
      {isLoading && (
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-[#0004]">
          <div className="h-5/6 aspect-square rounded-full border-4 border-white border-r-[#fff4] animate-spin"></div>
        </div>
      )}
      {children}
    </button>
  );
};

export default Button;
