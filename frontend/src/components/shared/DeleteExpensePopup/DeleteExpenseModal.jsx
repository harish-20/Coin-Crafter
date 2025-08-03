import { useDispatch, useSelector } from "react-redux";

import Title from "../../UI/Title";
import Button from "../../UI/Button";

import {
  expenseActions,
  expenseThunks,
} from "../../../store/slices/expense/expenseSlice";

let cachedDescription = "";

const DeleteExpenseModal = (props) => {
  const { className, closeModal } = props;

  const transaction = useSelector(
    (state) => state.expense.deleteTransactionTarget
  );

  const isExpenseDeleting = useSelector(
    (state) => state.expense.loadingState.isExpenseDeleting
  );

  cachedDescription = transaction.description || cachedDescription;

  const dispatch = useDispatch();

  const handleDelete = async () => {
    closeModal(false);

    await dispatch(expenseThunks.deleteTransaction(transaction.id)).unwrap();
    dispatch(expenseActions.setDeleteTransactionTarget({}));
  };

  return (
    <div
      className={`min-w-[300px] flex flex-col justify-between p-8 ${className}`}
    >
      <Title>Delete Transaction</Title>
      <p className="mt-6">
        Confirm deletion of this transaction. This cannot be undone.
      </p>
      <p className="mt-8 text-center text-red-400">{cachedDescription}</p>

      <div className="flex items-center justify-between mt-12 gap-3">
        <Button
          className="overflow-hidden"
          onClick={handleDelete}
          disabled={isExpenseDeleting}
        >
          {isExpenseDeleting ? "Deleting..." : "Yes"}
        </Button>
        <Button
          onClick={closeModal}
          variant="outlined"
          disabled={isExpenseDeleting}
        >
          No
        </Button>
      </div>
    </div>
  );
};
export default DeleteExpenseModal;
