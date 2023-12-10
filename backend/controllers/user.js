const User = require("../models/user");

module.exports.findUser = async (req, res, next) => {
  try {
    const { id } = req.body;
    if (!id) {
      res.status(400).send({
        errorCode: "invalidParameter",
        message: "Invaid or missing parameter",
      });
      return;
    }

    const result = await User.findById(id).populate(["categories", "expenses"]);
    if (!result) {
      res.status(404).send({
        message: "User not found.",
      });
      return;
    }

    res.status(200).send({ user: result });
  } catch (error) {
    next(error);
  }
};
