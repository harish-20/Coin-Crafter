const CategoryListWithHeading = (props) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl ">{props.heading}</h2>
      <div className="mt-3 flex flex-wrap gap-10 items-center ">
        {props.list}
        {props.extraItem}
      </div>
    </div>
  );
};

export default CategoryListWithHeading;
