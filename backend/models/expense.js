const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    amount: {
      type: Number,
      min: 0,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    time: {
      type: Date,
      required: true,
    },
    shortNote: String,
    tags: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Expense", expenseSchema);
