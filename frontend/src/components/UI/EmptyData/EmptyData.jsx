import { useDispatch, useSelector } from "react-redux";

import Button from "../Button";

import emptyDataImage from "../../../assets/EmptyData.png";
import { expenseThunks } from "../../../store/slices/expense/expenseSlice";

const EmptyData = (props) => {
  const isAutoFilling = useSelector(
    (state) => state.expense.loadingState.isAutoFilling
  );

  const dispatch = useDispatch();
  const handleAutoFill = async () => {
    dispatch(expenseThunks.autoFillTransactions());
  };

  return (
    <div className="mt-10 flex flex-col gap-8 items-center justify-center">
      <img className="" src={emptyDataImage} />

      <h2 className="font-bold">It looks a bit empty here!</h2>

      <div className="text-sm">
        You can autofill some predefined data if you wish.
      </div>

      <Button
        className="w-max"
        onClick={handleAutoFill}
        isLoading={isAutoFilling}
      >
        Auto fill
      </Button>
    </div>
  );
};
export default EmptyData;
