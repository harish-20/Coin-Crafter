import { Link } from "react-router-dom";

const white =
  "bg-white text-zinc-900 focus:shadow-white focus:shadow-md transition-all duration-200 hover:bg-gray-200";

const Button = (props) => {
  const classList = `mt-8 py-2 w-full text-center font-bold rounded-full ${white}  focus:outline-none disabled:bg-gray-300 ${props.className}`;

  if (props.href) {
    return (
      <Link to={props.href} className={classList}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classList} disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default Button;
