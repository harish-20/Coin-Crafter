import { api } from ".";

const getAllExpense = () => {
  api.get("/expense");
};

export const createExpense = async (data) => {
  try {
    const { user, category, amount, shortNote, tags } = data;
    const result = await api.post("/expense/create", {
      user,
      category,
      amount,
      shortNote,
      tags,
    });

    return result.data;
  } catch (err) {
    console.log(err);
  }
};
