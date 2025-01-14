import emptyDataImage from "../../../assets/EmptyData.png";
import Button from "../Button";

const EmptyData = (props) => {
  return (
    <div className="mt-10 flex flex-col gap-8 items-center justify-center">
      <img className="" src={emptyDataImage} />

      <h2 className="font-bold">It looks a bit empty here!</h2>

      <div className="text-sm">
        You can autofill some predefined data if you wish.
      </div>
      <Button className="w-max">Auto fill</Button>
    </div>
  );
};
export default EmptyData;
