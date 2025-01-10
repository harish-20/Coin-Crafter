export const expensesToCategoryDataPoints = (expenses) => {
  const categorizedData = expenses.reduce((acc, val) => {
    if (acc[val.category.title]) {
      acc[val.category.title].amount += val.amount;
    } else {
      acc[val.category.title] = {
        amount: val.amount,
        type: val.category.expenseType,
      };
    }

    return acc;
  }, {});

  const dataPoints = [];

  for (const key in categorizedData) {
    dataPoints.push({
      label: key,
      y: categorizedData[key].amount,
      type: categorizedData[key].type,
    });
  }

  return dataPoints;
};

export const expensesToDailyDataPoints = (expenses) => {
  if (expenses.length === 0)
    return { incomeData: [], expenseData: [], noOfDates: 0 };

  const firstExpenseDate = new Date(
    Math.min(...expenses.map((expense) => new Date(expense.date).getTime()))
  );

  const lastDayOfMonth = new Date(
    firstExpenseDate.getFullYear(),
    firstExpenseDate.getMonth() + 1,
    0
  ).getDate();

  const incomeDataPoints = Array.from({ length: lastDayOfMonth }, (_, i) => ({
    label: `${i + 1}`,
    x: i,
    y: 0,
  }));
  const spendDataPoints = Array.from({ length: lastDayOfMonth }, (_, i) => ({
    label: `${i + 1}`,
    x: i,
    y: 0,
  }));

  expenses.forEach((expense) => {
    const date = new Date(expense.date);
    const day = date.getDate() - 1;
    const amount = expense.amount;

    if (expense.category.expenseType === "income") {
      incomeDataPoints[day].y += amount;
    } else if (expense.category.expenseType === "spend") {
      spendDataPoints[day].y += amount;
    }
  });

  return { incomeDataPoints, spendDataPoints };
};
