import Filters from "./Filters";
import Sorts from "./Sorts";

const ListControl = () => {
  return (
    <div className="flex justify-between items-center flex-col md:flex-row">
      <Filters />
      <Sorts />
    </div>
  );
};
export default ListControl;
