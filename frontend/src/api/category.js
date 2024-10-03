import { api } from ".";

export const getDefaultCategories = async () => {
  try {
    const response = await api.get("/category/getDefaultCategories");

    return response.data.categories;
  } catch (err) {
    console.log("Cannot Login", err);
  }
};
