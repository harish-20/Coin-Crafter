const Expense = require("../models/expense");
const User = require("../models/user");

module.exports.getAllExpense = async (req, res) => {
  try {
    const { email } = req.body;
    const { month, year, category, expenseType, date, amount, search } =
      req.query;

    const user = await User.findOne({ email });

    const filter = { user: user._id };
    let sort = { date: -1, time: -1 };

    // search filter
    if (search) {
      const allQueries = [];
      const words = search.split(" ");
      words.forEach((word) => {
        allQueries.push({ shortNote: { $regex: word } });
      });

      filter.$or = allQueries;
    }

    // adding month and year filter
    if (month && year) {
      filter.date = {
        $gte: new Date(year, month - 1, 1),
        $lt: new Date(year, month, 1),
      };
    } else if (year) {
      filter.date = {
        $gte: new Date(year, 0, 1),
        $lt: new Date(year + 1, 0, 1),
      };
    }

    // adding category filter with category id
    if (category) {
      filter.category = {
        $eq: category,
      };
    }

    // Adding sorts
    if (date) {
      sort = { date: +date, time: +date };
    }
    if (amount) {
      sort = { amount: +amount };
    }

    let expenses = await Expense.find(filter, { user: 0 }, { sort }).populate(
      "category"
    );

    if (expenseType) {
      expenses = expenses.filter(
        (expense) => expense.category.expenseType === expenseType
      );
    }

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

module.exports.availableFiltersMonth = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    const availableMonthsByYear = await Expense.aggregate([
      { $match: { user: user._id } },
      {
        $group: {
          _id: {
            year: { $year: "$date" },
            month: { $month: "$date" },
          },
        },
      },
      { $sort: { "_id.year": -1, "_id.month": 1 } },
      {
        $group: {
          _id: "$_id.year",
          months: { $push: "$_id.month" },
        },
      },
      {
        $project: {
          year: "$_id",
          months: 1,
          _id: 0,
        },
      },
    ]);

    res.status(200).send(availableMonthsByYear);
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
    const {
      email,
      category,
      amount,
      shortNote,
      date,
      time,
      tags = [],
    } = req.body;
    if (!category || !amount || !shortNote || !date || !time) {
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
      date,
      time,
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
    const {
      email,
      _id,
      category,
      amount,
      shortNote,
      date,
      time,
      tags = [],
    } = req.body;
    if (!category || !amount || !shortNote || !date || !time) {
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
        date,
        time,
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
