const { categories } = require("./categories");

const dbConnection = require("../../dbConnection");

const category = require("../../models/category");

dbConnection();

category
  .insertMany(categories)
  .then((data) => console.log("data seeded", data))
  .catch((err) => console.log(err));
