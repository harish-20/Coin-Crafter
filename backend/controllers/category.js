const User = require("../models/user");
const Category = require("../models/category");

const { ERROR_CODES } = require("../utils/errorCodes");

module.exports.createCategory = async (req, res) => {
  try {
    const { title, icon, iconColor, backgroundColor, expenseType } = req.body;

    const owner = await User.findOne({ email: req.body.email });
    if (!owner) return res.status(400).send(ERROR_CODES.NO_USER_FOUND);

    const ownedBy = owner._id;
    const categoryData = {
      title,
      icon,
      iconColor,
      backgroundColor,
      expenseType,
      ownedBy,
    };
    const category = new Category(categoryData);

    const invalidData = category.validateSync();
    if (invalidData) {
      return res.status(400).send(ERROR_CODES.INVALID_DATA);
    }

    const savedCategory = await category.save();

    const result = await User.findByIdAndUpdate(owner, {
      $push: { categories: savedCategory._id },
    });

    return res.status(200).send({
      message: "category created successfully!",
      category: savedCategory,
    });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).send(ERROR_CODES.CANNOT_CREATE_CATEGORY);
  }
};

module.exports.getDefaultCategories = async (req, res) => {
  try {
    const defaultCategories = await Category.find({ ownedBy: null });
    if (defaultCategories.length === 0) {
      return res.status(400).send(ERROR_CODES.NO_CATEGORY_FOUND);
    }
    return res.status(200).send({ categories: defaultCategories });
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).send(ERROR_CODES.CANNOT_GET_CATEGORY);
  }
};

module.exports.getCustomCategories = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send(ERROR_CODES.NO_USER_FOUND);

    const customCategories = await Category.find({ ownedBy: user._id });

    return res.status(200).send({ categories: customCategories });
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).send(ERROR_CODES.CANNOT_GET_CATEGORY);
  }
};
