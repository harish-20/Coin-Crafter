const Title = (props) => {
  return (
    <h2 className={`font-medium text-xl md:text-2xl ${props.className || ""}`}>
      {props.children}
    </h2>
  );
};

export default Title;
