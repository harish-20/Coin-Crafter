import Spinner from "../UI/Spinner";

const CategoryListWithHeading = (props) => {
  const { isLoading, heading, list, extraItem } = props;

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl">{heading}</h2>

      {isLoading && (
        <div className="my-8">
          <Spinner size={70} />
        </div>
      )}

      {!isLoading && list && (
        <div className="mt-3 flex flex-wrap gap-10 items-center">
          {list}
          {extraItem}
        </div>
      )}
    </div>
  );
};

export default CategoryListWithHeading;
