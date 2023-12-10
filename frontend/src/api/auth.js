import { api } from ".";

export const googleSignin = async (token) => {
  const response = await api.post("/googleSignin", { token });
  return response;
};
