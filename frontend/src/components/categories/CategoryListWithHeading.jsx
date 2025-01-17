import Spinner from "../UI/Spinner";

const CategoryListWithHeading = (props) => {
  const { isLoading, heading, list, extraItem } = props;

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl">{heading}</h2>

      {isLoading && (
        <div className="flex justify-center h-full min-h-[25vh] my-8">
          <Spinner size={50} />
        </div>
      )}

      {!isLoading && list && (
        <div className="mt-3 flex flex-wrap items-center justify-center gap-4 md:gap-10 md:justify-start">
          {list}
          {extraItem}
        </div>
      )}
    </div>
  );
};

export default CategoryListWithHeading;
