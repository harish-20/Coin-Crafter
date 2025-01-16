const ErrorText = (props) => {
  const { children } = props;
  return <div className="mt-1 text-red-500 text-xs">{children}</div>;
};
export default ErrorText;
