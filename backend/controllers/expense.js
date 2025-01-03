const Expense = require("../models/expense");
const User = require("../models/user");

module.exports.getAllExpense = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    const expenses = await Expense.find(
      { user: user._id },
      { user: 0 },
      {
        sort: {
          createdAt: -1,
        },
      }
    ).populate("category");

    res.status(200).send(expenses);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong.",
      error,
    });
  }
};

module.exports.getSigleExpense = async (req, res) => {
  try {
    const id = req.params.id;
    const { email } = req.body;
    const user = await User.findOne({ email });

    const expense = await Expense.findById(id);

    if (expense.user.equals(user._id)) {
      const { user, ...otherFields } = expense.toObject();
      res.status(200).send(otherFields);
    } else {
      res.status(403).send({
        error: "Forbidden",
        message: "You do not have permission to access this expense record.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong.",
      error,
    });
  }
};

module.exports.addExpense = async (req, res) => {
  try {
    const { email, category, amount, shortNote, tags = [] } = req.body;
    if (!category || !amount || !shortNote) {
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

module.exports.updateExpense = async (req, res) => {
  try {
    const { email, _id, category, amount, shortNote, tags = [] } = req.body;
    if (!category || !amount || !shortNote) {
      res.status(400).send({
        message: "invalid or missing parameters",
      });
      return;
    }
    const user = await User.findOne({ email });

    await Expense.findByIdAndUpdate(
      _id,
      {
        user: user._id,
        category,
        amount,
        shortNote,
        tags,
      },
      {
        upsert: 1,
      }
    );

    const populatedExpense = await Expense.findById(_id).populate([
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

module.exports.deleteExpense = async (req, res) => {};
