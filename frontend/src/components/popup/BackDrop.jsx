import "./BackDrop.css";

const BackDrop = (props) => (
  <div
    className="backdrop h-full w-full bg-black"
    onClick={props.onClick}
  ></div>
);

export default BackDrop;
