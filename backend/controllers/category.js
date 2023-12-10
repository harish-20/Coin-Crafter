const Category = require("../models/category");
const User = require("../models/user");

module.exports.createCategory = async (req, res) => {
  try {
    const { title, icon, iconColor, backgroundColor, expenseType, ownedBy } =
      req.body;
    const categoryData = {
      title,
      icon,
      iconColor,
      backgroundColor,
      expenseType,
      ownedBy: ownedBy || null,
    };
    const category = new Category(categoryData);

    const invalidData = category.validateSync();
    if (invalidData) {
      res.status(400).send({
        message: "Invalid data. Please check the data once",
        error: invalidData.errors,
      });
      return;
    }

    const savedCategory = await category.save();

    if (ownedBy) {
      const result = await User.findByIdAndUpdate(ownedBy, {
        $push: { categories: savedCategory._id },
      });
      console.log(result);
    }

    const categories = await Category.find({});
    res
      .status(200)
      .send({ message: "category created successfully!", categories });
  } catch (err) {
    console.log("Error:", err);
    res.status(500).send("Something went wrong");
  }
};
