import Layout from "../components/shared/Layout/Layout";
import SearchBar from "../components/transactions/SearchBar/SearchBar";
import Filters from "../components/transactions/Filters/Filters";
import TransactionList from "../components/transactions/TransactionList/TransactionList";
import { useState } from "react";
import SingleTransaction from "../components/transactions/SingleTransation/SingleTransaction";

const Transactions = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(false);

  const selectTransaction = (id) => {
    // will have to set id when it has done
    setSelectedTransaction((prev) => !prev);
  };
  const handleClose = () => {
    selectTransaction(null);
  };
  return (
    <Layout className="px-8">
      <SearchBar />
      <Filters />
      <TransactionList selectTransaction={selectTransaction} />
      <SingleTransaction isOpen={selectedTransaction} onClose={handleClose} />
    </Layout>
  );
};

export default Transactions;
