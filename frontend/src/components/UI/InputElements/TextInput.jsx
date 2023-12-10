import InputContainer from "../InputElements/InputContainer";
import Label from "../Label";

const TextInput = (props) => {
  const { id, value, name, onChange, label, ...others } = props;
  return (
    <InputContainer>
      <Label id={id} label={label} />
      <input
        id={id}
        name={name}
        className="bg-transparent mt-2 py-2 px-4 border-[1.5px] border-gray-700 rounded-lg focus:border-gray-400 focus:outline-none"
        {...others}
      />
    </InputContainer>
  );
};

export default TextInput;
