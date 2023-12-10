const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 40,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      validate: {
        validator: (value) => /\S+@\S+\.\S+/.test(value),
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
    hasGoogleAuth: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
    },
    usedGoogleLogin: {
      type: Boolean,
    },
    avatar: {
      type: String,
    },
    budget: {
      monthly: Number,
      yearly: Number,
    },
    expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Expense" }],
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  },
  { timestamps: true }
);

userSchema.virtual("totalSpent").get(async function () {
  await this.populate("expenses").execPopulate();
  const totalSpent = this.expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  return totalSpent;
});

module.exports = mongoose.model("User", userSchema);
