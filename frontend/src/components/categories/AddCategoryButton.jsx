import PlusIcon from "../UI/Icons/PlusIcon";

const AddCategoryButton = (props) => {
  return (
    <div
      className="bg-gray-800 opacity-70 min-w-[150px] aspect-square rounded-xl flex flex-col items-center justify-evenly duration-200 hover:bg-gray-700"
      onClick={props.toggleForm}
    >
      <PlusIcon className="h-[40%]" />
      <div className="text-sm">Add Category</div>
    </div>
  );
};

export default AddCategoryButton;
