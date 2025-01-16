import { api } from ".";

export const googleSignin = async (googleToken) => {
  try {
    const response = await api.post("/googleSignin", { token: googleToken });
    localStorage.setItem("access-token", response.data.token);
    return response.data;
  } catch (err) {
    console.log("Cannot Login", err);
  }
};

export const emailSignin = async (email, password) => {
  const response = await api.post("/user/signin", { email, password });
  localStorage.setItem("access-token", response.data.token);
  return response.data;
};

export const emailSignup = async (name, email, password) => {
  const response = await api.post("/user/signup", { name, email, password });
  localStorage.setItem("access-token", response.data.token);
  return response.data;
};

export const getUser = async () => {
  try {
    const response = await api.get("/user/getUser");

    return response.data;
  } catch (err) {
    console.log("Cannot Login", err);
  }
};
