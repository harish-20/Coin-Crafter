export const expenseToDataPoints = (expenses) => {
  const categorizedData = expenses.reduce((acc, val) => {
    if (acc[val.category.title]) {
      acc[val.category.title] += val.amount;
    } else {
      acc[val.category.title] = val.amount;
    }

    return acc;
  }, {});

  const dataPoints = [];

  for (const key in categorizedData) {
    dataPoints.push({ label: key, y: categorizedData[key] });
  }

  return dataPoints;
};
