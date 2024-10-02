const DataWithLabel = (props) => (
  <div className="flex flex-row gap-3 md:w-2/12 md:flex-col">
    <label className="text-sm text-gray-600 font-semibold">{props.label}</label>
    <div>{props.data}</div>
  </div>
);

export default DataWithLabel;
