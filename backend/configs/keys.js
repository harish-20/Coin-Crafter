require("dotenv").config();

const { PORT, CORS_ORIGIN, MONGODB_URI, GOOGLE_CLIENT_ID, SECRET_KEY } =
  process.env;

module.exports = {
  PORT: PORT || 8000,
  CORS_ORIGIN: CORS_ORIGIN || "*",
  MONGODB_URI,
  GOOGLE_CLIENT_ID,
  SECRET_KEY,
};
