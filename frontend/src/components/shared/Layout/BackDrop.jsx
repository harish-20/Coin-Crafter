const BackDrop = (props) => {
  const { onClick } = props;
  return (
    <div
      className="z-40 fixed top-0 left-0 h-screen w-full bg-[rgb(0,0,0,0.4)]"
      onClick={onClick}
    ></div>
  );
};

export default BackDrop;
