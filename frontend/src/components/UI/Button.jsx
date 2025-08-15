import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const white =
  "bg-white text-zinc-900 focus:shadow-white focus:shadow-md transition-all duration-200 hover:bg-gray-200";

const outlined =
  "bg-transparent text-white border-2 border-white focus:shadow-white focus:shadow-md transition-all duration-200 hover:bg-white hover:text-black";

/**
 * Button component for handling both link and button elements with customizable styles and functionality.
 *
 * @param {Object} props - Props object for the Button component.
 * @param {string} [props.className] - Additional CSS classes to apply to the button or link.
 * @param {string} [props.href] - If provided, renders a `Link` component (React Router) instead of a `button`.
 * @param {boolean} [props.disabled=false] - Disables the button, preventing user interaction.
 * @param {boolean} [props.isLoading=false] - Shows a loading spinner overlay when `true`.
 * @param {"default"|"outlined"} [props.variant="default"] - Style variant for the button.
 * @param {React.ReactNode} props.children - The content to display inside the button or link.
 * @param {Object} [props.otherProps] - Additional props to spread onto the button or link element.
 *
 * @returns {React.ReactElement} A styled `button` or `Link` element.
 */
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
      <Link to={href} className={classList} {...otherProps}>
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

Button.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "outlined"]),
  otherProps: PropTypes.object,
};

Button.defaultProps = {
  className: "",
  href: null,
  disabled: false,
  isLoading: false,
  variant: "default",
};

export default Button;
