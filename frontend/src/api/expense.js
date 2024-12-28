import { api } from ".";

export const getAllExpense = async () => {
  try {
    const result = await api.get("/expense");

    return result.data;
  } catch (error) {
    console.log(error);
  }
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
  } catch (error) {
    console.log(error);
  }
};
