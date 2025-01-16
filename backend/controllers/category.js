const User = require("../models/user");
const Category = require("../models/category");

module.exports.createCategory = async (req, res) => {
  try {
    const { title, icon, iconColor, backgroundColor, expenseType } = req.body;

    const owner = await User.findOne({ email: req.body.email });
    if (!owner)
      return res.status(400).send({
        errorMessage: "noUserFound",
        message: "no user found for this email",
      });

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
      return res.status(400).send({
        errorCode: "invalidData",
        message: "Invalid data. Please check the data once",
        error: invalidData.errors,
      });
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
    return res.status(500).send({
      errorCode: "cannotCreateCategory",
      message: "cannot create category",
    });
  }
};

module.exports.getDefaultCategories = async (req, res) => {
  try {
    const defaultCategories = await Category.find({ ownedBy: null });
    if (defaultCategories.length === 0) {
      return res.status(400).send({
        errorMessage: "noCategoryFound",
        message: "no category found for now add some.",
      });
    }
    return res.status(200).send({ categories: defaultCategories });
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).send({
      errorCode: "cannotGetCategory",
      message: "cannot get category",
    });
  }
};

module.exports.getCustomCategories = async (req, res) => {
  try {
    const owner = await User.findOne({ email: req.body.email });
    if (!owner)
      return res.status(400).send({
        errorCode: "noUserFound",
        message: "no user found for this email",
      });

    const customCategories = await Category.find({ ownedBy: owner._id });

    return res.status(200).send({ categories: customCategories });
  } catch (err) {
    console.log("Error:", err);
    return res
      .status(500)
      .send({ errorCode: "cannotGetCategory", message: "cannot get category" });
  }
};
