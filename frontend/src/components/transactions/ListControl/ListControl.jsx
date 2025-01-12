import Filters from "./Filters";
import Sorts from "./Sorts";

const ListControl = () => {
  return (
    <div className="flex justify-between items-center">
      <Filters />
      <Sorts />
    </div>
  );
};
export default ListControl;
