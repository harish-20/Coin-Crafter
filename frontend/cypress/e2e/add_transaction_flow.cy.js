const transaction = {
  category: "Groceries",
  amount: 2000,
  description: "monthly groceries",
};

describe("Add transaction flow", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/transactions");

    cy.apiIntercept("GET", "/expense?**", "get-transactions");
    cy.wait("@get-transactions");
  });

  it("Add transaction form", () => {
    cy.apiIntercept("POST", "/expense/create", "create-transaction");

    cy.get(`[data-test="add-transaction"]`).click();

    // fill category
    cy.get(`[data-test="category-dropdown"]`).click().wait(500);
    cy.get(
      `[data-test="category-dropdown"] ~ [data-test="category-dropdown-list"] [data-testid="${transaction.category}"]`
    )
      .first()
      .click();

    cy.get(`[data-test="amount"]`).type(transaction.amount);
    cy.get(`[data-test="description"]`).type(transaction.description);

    cy.get(`[data-test="transaction-submit"]`).click();

    cy.wait("@create-transaction").then((data) => {
      const transactionAdded = data.response.body.expense;

      expect(transactionAdded.category.title).to.be.equal(transaction.category);
      expect(transactionAdded.shortNote).to.be.equal(transaction.description);
      expect(transactionAdded.amount).to.be.equal(transaction.amount);
    });
  });
});
