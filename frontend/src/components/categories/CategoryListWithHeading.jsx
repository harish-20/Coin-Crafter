import Spinner from "../UI/Spinner";

const CategoryListWithHeading = (props) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl ">{props.heading}</h2>

      {props.isLoading ? (
        <div className="my-8">
          <Spinner size={70} />
          <div className="text-white text-lg text-center mt-6">Loading...</div>
        </div>
      ) : (
        <div className="mt-3 flex flex-wrap gap-10 items-center ">
          {props.list}
          {props.extraItem}
        </div>
      )}
    </div>
  );
};

export default CategoryListWithHeading;
