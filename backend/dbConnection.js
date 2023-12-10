const { MONGODB_URI } = require("./configs/keys");

const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(MONGODB_URI)
    .then((response) => {
      console.log("Database connection established successfully! 🚀 \n\n");
    })
    .catch((error) => {
      console.log("Error in DB connection: " + error);
    });
};
