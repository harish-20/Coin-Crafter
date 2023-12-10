export default (props) => (
  <div className={"flex flex-col mt-6 " + (props.className || "")}>
    {props.children}
  </div>
);
