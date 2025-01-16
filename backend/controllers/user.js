const User = require("../models/user");

const { ERROR_CODES } = require("../utils/errorCodes");

module.exports.getUser = async (req, res, next) => {
  try {
    const { email } = req.body;

    const result = await User.findOne({ email }).populate([
      "categories",
      "expenses",
    ]);
    if (!result) {
      return res.status(404).send(ERROR_CODES.NO_USER_FOUND);
    }

    return res.status(200).send({ user: result });
  } catch (error) {
    return res.status(500).send(ERROR_CODES.CANNOT_GET_USER);
  }
};
