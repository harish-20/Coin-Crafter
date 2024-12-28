import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Layout from "../components/shared/Layout/Layout";
import SearchBar from "../components/transactions/SearchBar/SearchBar";
import Filters from "../components/transactions/Filters/Filters";
import TransactionList from "../components/transactions/TransactionList/TransactionList";
import SingleTransaction from "../components/transactions/SingleTransation/SingleTransaction";

import * as expenseThunks from "../store/slices/expense/thunks";

const Transactions = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(expenseThunks.getAllTransaction());
  }, []);

  const selectTransaction = (id) => {
    // will have to set id when it has done
    setSelectedTransaction(id);
  };
  const handleClose = () => {
    selectTransaction(null);
  };
  return (
    <Layout className="px-8">
      <SearchBar />
      <Filters />
      <TransactionList
        selectedTransaction={selectedTransaction}
        selectTransaction={selectTransaction}
      />
      <SingleTransaction isOpen={selectedTransaction} onClose={handleClose} />
    </Layout>
  );
};

export default Transactions;
