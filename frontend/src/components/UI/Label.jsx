const Label = (props) => (
  <label className="font-semibold" htmlFor={props.id}>
    {props.label}
  </label>
);

export default Label;
