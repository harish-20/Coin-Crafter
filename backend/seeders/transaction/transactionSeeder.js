const transactions = require("./transactions.json");

const { getFormattedTime } = require("../../utils/helper");

module.exports.getDummyTransactions = (user) => {
  return transactions.map((transaction) => ({
    ...transaction,
    // taking the date only
    date: new Date(transaction.date.split("T")[0]),
    // taking only time
    time: getFormattedTime(transaction.time),
    user,
  }));
};
