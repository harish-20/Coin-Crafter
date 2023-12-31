import OptionIcon from "../../UI/Icons/OptionIcon";

const Option = (props) => {
  if (props.isOpen) return <div>menu</div>;

  return <OptionIcon />;
};

export default Option;
