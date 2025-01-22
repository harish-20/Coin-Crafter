const SmallText = (props) => {
  const { className = "", children } = props;
  return <p className={`text-xs text-gray-500 ${className}`}>{children}</p>;
};

export default SmallText;
