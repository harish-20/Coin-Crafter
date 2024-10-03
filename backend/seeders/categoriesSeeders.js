const { categories } = require("./categories");

const dbConnection = require("../dbConnection");
const category = require("../models/category");

dbConnection();

category.insertMany(categories);
