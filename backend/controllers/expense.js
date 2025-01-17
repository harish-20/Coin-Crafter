const Expense = require("../models/expense");
const User = require("../models/user");

const {
  getDummyTransactions,
} = require("../seeders/transaction/transactionSeeder");

const { ERROR_CODES } = require("../utils/errorCodes");
const { getFormattedTime } = require("../utils/helper");

module.exports.getAllExpense = async (req, res) => {
  try {
    const { email } = req.body;
    const { month, year, category, expenseType, date, amount, search } =
      req.query;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send(ERROR_CODES.NO_USER_FOUND);

    const filter = { user: user._id };
    let sort = { date: -1, time: -1 };

    // search filter
    if (search) {
      const allQueries = [];
      const words = search.split(" ");
      words.forEach((word) => {
        allQueries.push({ shortNote: { $regex: word, $options: "i" } });
      });

      filter.$or = allQueries;
    }

    // adding month and year filter
    if (month && year) {
      filter.date = {
        $gte: new Date(year, month - 1, 1),
        $lt: new Date(year, month, 1),
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

    return res.status(200).send(expenses);
  } catch (error) {
    console.log(error);
    return res.status(500).send(ERROR_CODES.CANNOT_GET_EXPENSES);
  }
};

module.exports.getSigleExpense = async (req, res) => {
  try {
    const id = req.params.id;
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send(ERROR_CODES.NO_USER_FOUND);

    const expense = await Expense.findById(id);

    if (expense.user.equals(user._id)) {
      const { user, ...otherFields } = expense.toObject();
      return res.status(200).send(otherFields);
    } else {
      return res.status(403).send(ERROR_CODES.NO_ACCESS_TO_EXPENSE);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(ERROR_CODES.CANNOT_GET_EXPENSES);
  }
};

module.exports.availableFiltersMonth = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send(ERROR_CODES.NO_USER_FOUND);

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
      { $sort: { "_id.year": 1, "_id.month": 1 } },
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
      { $sort: { year: -1 } },
    ]);

    return res.status(200).send(availableMonthsByYear);
  } catch (error) {
    console.log(error);
    return res.status(500).send(ERROR_CODES.CANNOT_GET_FILTERS);
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
      res.status(400).send(ERROR_CODES.INVALID_INPUTS);
    }
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send(ERROR_CODES.NO_USER_FOUND);

    const expense = new Expense({
      user: user._id,
      category,
      amount,
      shortNote,
      date,
      time: getFormattedTime(time),
      tags,
    });

    const invalidData = expense.validateSync();
    if (invalidData) {
      return res.status(400).send(ERROR_CODES.INVALID_DATA);
    }

    const savedExpense = await expense.save();
    const populatedExpense = await Expense.findById(savedExpense._id).populate([
      "category",
      "user",
    ]);

    return res.status(200).send({ expense: populatedExpense });
  } catch (error) {
    console.log(error);
    return res.status(500).send(ERROR_CODES.CANNOT_ADD_EXPENSE);
  }
};

module.exports.addBulkExpenses = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send(ERROR_CODES.NO_USER_FOUND);

    const dummyExpenses = getDummyTransactions(user._id.toString());
    const result = await Expense.insertMany(dummyExpenses);

    return res
      .status(200)
      .send({ success: true, message: "dummy expenses added" });
  } catch (error) {
    console.log(error);
    return res.status(500).send(ERROR_CODES.CANNOT_ADD_EXPENSE);
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
      return res.status(400).send(ERROR_CODES.INVALID_INPUTS);
    }
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send(ERROR_CODES.NO_USER_FOUND);

    await Expense.findByIdAndUpdate(
      _id,
      {
        user: user._id,
        category,
        amount,
        shortNote,
        tags,
        date,
        time: getFormattedTime(time),
      },
      {
        upsert: 1,
      }
    );

    const populatedExpense = await Expense.findById(_id).populate([
      "category",
      "user",
    ]);

    return res.status(200).send({ expense: populatedExpense });
  } catch (error) {
    console.log(error);
    return res.status(500).send(ERROR_CODES.CANNOT_UPDATE_EXPENSE);
  }
};

module.exports.deleteExpense = async (req, res) => {};
