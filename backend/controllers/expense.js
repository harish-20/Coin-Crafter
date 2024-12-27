const Expense = require("../models/expense");
const User = require("../models/user");

module.exports.addExpense = async (req, res) => {
  try {
    const { email, category, amount, shortNote, tags = [] } = req.body;
    if (!category || !amount || !shortNote || !tags) {
      res.status(400).send({
        message: "invalid or missing parameters",
      });
      return;
    }
    const user = await User.findOne({ email });

    const expense = new Expense({
      user: user._id,
      category,
      amount,
      shortNote,
      tags,
    });

    const invalidData = expense.validateSync();
    if (invalidData) {
      res.status(400).send({
        message: "invalid data",
        error: invalidData.errors,
      });
      return;
    }

    const savedExpense = await expense.save();
    const populatedExpense = await Expense.findById(savedExpense._id).populate([
      "category",
      "user",
    ]);

    res.status(200).send({ expense: populatedExpense });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong.",
      error,
    });
  }
};

module.exports.getAllExpense = async (req, res) => {};

module.exports.updateExpense = async (req, res) => {};

module.exports.deleteExpense = async (req, res) => {};
