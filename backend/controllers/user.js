const User = require("../models/user");

module.exports.getUser = async (req, res, next) => {
  try {
    const { email } = req.body;

    const result = await User.findOne({ email }).populate([
      "categories",
      "expenses",
    ]);
    if (!result) {
      return res.status(404).send({
        message: "User not found.",
      });
    }

    return res.status(200).send({ user: result });
  } catch (error) {
    next(error);
  }
};
