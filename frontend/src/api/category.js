import { api } from ".";

export const getDefaultCategories = async () => {
  try {
    const response = await api.get("/category/getDefaultCategories");

    return response.data.categories;
  } catch (err) {
    console.log("Cannot Fetch Default Categories", err);
  }
};

export const getCustomCategories = async () => {
  try {
    const response = await api.get("/category/getCustomCategories");

    return response.data.categories;
  } catch (err) {
    console.log("Cannot Fetch Custom Categories", err);
  }
};

export const createCategory = async (category) => {
  try {
    const response = await api.post("/category/create", category);

    return response.data.category;
  } catch (err) {
    console.log("Cannot Add Category", err);
  }
};
