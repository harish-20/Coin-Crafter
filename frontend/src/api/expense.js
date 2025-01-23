import { api } from ".";

export const getAllExpense = async (data) => {
  const params = new URLSearchParams(data);
  const result = await api.get(
    `/expense${params ? `?${params.toString()}` : ""}`
  );

  return result.data;
};

export const getSingleExpense = async (id) => {
  try {
    const result = await api.get(`/expense/${id}`);

    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAvailableFilter = async () => {
  try {
    const result = await api.get("/expense/availableFilterMonths");

    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const createExpense = async (data) => {
  const { user, category, amount, date, time, shortNote, tags } = data;
  const result = await api.post("/expense/create", {
    user,
    category,
    amount,
    shortNote,
    tags,
    date,
    time,
  });

  return result.data;
};

export const updateExpense = async (data) => {
  try {
    const { _id, user, category, amount, date, time, shortNote, tags } = data;
    const result = await api.post("/expense/update", {
      _id,
      user,
      category,
      amount,
      shortNote,
      tags,
      date,
      time,
    });

    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const autoFillExpense = async () => {
  try {
    const result = await api.post("/expense/createMany");

    return result.data;
  } catch (error) {
    console.log(error);
  }
};
