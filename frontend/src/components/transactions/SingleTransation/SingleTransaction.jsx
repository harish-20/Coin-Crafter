import React from "react";
import TransactionForm from "./TransactionForm";
import BackDrop from "../../shared/Layout/BackDrop";

const SingleTransaction = (props) => {
  const { isOpen, onClose } = props;
  return (
    <>
      {isOpen && <BackDrop onClick={onClose} />}
      <div
        className={`z-50 h-screen w-[300px] md:w-[500px] duration-300 fixed top-0 right-0 bg-dark ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <TransactionForm />
      </div>
    </>
  );
};

export default SingleTransaction;
