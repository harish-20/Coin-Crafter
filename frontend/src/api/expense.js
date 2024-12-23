import { api } from ".";

const createExpense = () => {
  api.post("/expense/create", { user, category, amount, shortNote, tags });
};
