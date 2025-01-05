import { api } from ".";

export const getAllExpense = async (data) => {
  try {
    const params = new URLSearchParams(data);
    console.log(params);
    const result = await api.get(
      `/expense${params ? `?${params.toString()}` : ""}`
    );

    return result.data;
  } catch (error) {
    console.log(error);
  }
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
  try {
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
  } catch (error) {
    console.log(error);
  }
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
