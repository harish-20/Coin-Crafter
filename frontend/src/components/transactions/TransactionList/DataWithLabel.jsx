const DataWithLabel = (props) => (
  <div className="flex flex-col w-2/12">
    <label className="text-sm text-gray-600 font-semibold">{props.label}</label>
    <div>{props.data}</div>
  </div>
);

export default DataWithLabel;
