import { screen } from "@testing-library/react";
import { render } from "../../../../setupTests";

import TransactionList from "../../../../components/transactions/TransactionList/TransactionList";
import { initialState as expenseState } from "../../../../store/slices/expense/expenseSlice";
import { transactions } from "../../../../__mocks__/transactions.mock";

const expenseStateAdapter = (partial = {}) => ({
  expense: { ...expenseState, ...partial },
});

describe("Transaction list", () => {
  it("should display all transactions", () => {
    render(
      <TransactionList />,
      expenseStateAdapter({ expenses: transactions })
    );

    const transactionList = screen.getByLabelText("transaction-list");
    expect(transactionList).toBeInTheDocument();
  });

  it("should display loading ui", () => {
    render(
      <TransactionList />,
      expenseStateAdapter({
        loadingState: {
          isExpensesLoading: true,
        },
      })
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("should display auto fill when expenses empty", () => {
    // state is initial empty so no need to configure preload
    render(<TransactionList />);

    expect(screen.getByRole("button", { name: /auto /i })).toBeInTheDocument();
  });

  it("should display no result ui for search", () => {
    render(
      <TransactionList />,
      expenseStateAdapter({
        search: "some text for testing",
      })
    );

    expect(screen.getByText(/no result found/i)).toBeInTheDocument();
  });

  it("should display error ui", () => {
    render(
      <TransactionList />,
      expenseStateAdapter({
        errorState: {
          isExpensesLoadingError: true,
        },
      })
    );

    expect(screen.getByText(/cannot fetch transactions/i)).toBeInTheDocument();
  });
});
