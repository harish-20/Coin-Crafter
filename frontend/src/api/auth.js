import { api } from ".";

export const googleSignin = async (googleToken) => {
  try {
    const response = await api.post("/googleSignin", { token: googleToken });
    localStorage.setItem("auth", response.data.token);
    return response;
  } catch (err) {
    console.log("Cannot Login", err);
  }
};

export const emailSignin = async (email, password) => {
  try {
    const response = await api.post("/user/signin", { email, password });
    localStorage.setItem("auth", response.data.token);
    return response.data;
  } catch (err) {
    console.log("Cannot Login", err);
  }
};

export const emailSignup = async (name, email, password) => {
  try {
    const response = await api.post("/user/signup", { name, email, password });
    localStorage.setItem("auth", response.data.token);
    return response.data;
  } catch (err) {
    console.log("Cannot Login", err);
  }
};
