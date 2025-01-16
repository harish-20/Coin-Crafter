import { useDispatch, useSelector } from "react-redux";

import BackDrop from "../../shared/Layout/BackDrop";
import TransactionForm from "./TransactionForm";

import { expenseActions } from "../../../store/slices/expense/expenseSlice";

const SingleTransaction = () => {
  const expenseOnEditMode = useSelector(
    (state) => state.expense.expenseOnEditMode
  );

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(expenseActions.toggleEditMode(null));
  };
  return (
    <>
      {expenseOnEditMode && <BackDrop onClick={handleClose} />}
      <div
        className={`z-50 h-screen w-[300px] md:w-[500px] duration-300 fixed top-0 right-0 bg-dark ease-in-out ${
          expenseOnEditMode ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <TransactionForm />
      </div>
    </>
  );
};

export default SingleTransaction;
