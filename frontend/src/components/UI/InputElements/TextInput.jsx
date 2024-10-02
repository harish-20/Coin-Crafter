import InputContainer from "../InputElements/InputContainer";
import Label from "../Label";

const TextInput = (props) => {
  const { id, value, name, onChange, label, errorMessage, ...others } = props;
  return (
    <InputContainer>
      <Label id={id} label={label} />
      <input
        id={id}
        name={name}
        onChange={onChange}
        className="bg-transparent mt-2 py-2 px-4 border-[1.5px] border-gray-700 rounded-lg outline-none duration-200 focus:border-gray-400"
        {...others}
      />
      {errorMessage && (
        <div className="mt-1 text-red-500 text-xs">{errorMessage}</div>
      )}
    </InputContainer>
  );
};

export default TextInput;
