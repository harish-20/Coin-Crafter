import Layout from "../components/shared/Layout/Layout";
import SearchBar from "../components/transactions/SearchBar/SearchBar";
import Filters from "../components/transactions/Filters/Filters";
import TransactionList from "../components/transactions/TransactionList/TransactionList";

const Transactions = () => {
  return (
    <Layout className="px-8">
      <SearchBar />
      <Filters />
      <TransactionList />
      {/* <SingleTransaction /> */}
    </Layout>
  );
};

export default Transactions;
