import emptyTransactionImg from "../../../assets/EmptyTransaction.png";

const EmptyTransaction = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <img src={emptyTransactionImg} alt="Empty Transaction" />

      <h3 className="text-xl font-semibold">No Result Found!</h3>
    </div>
  );
};
export default EmptyTransaction;
