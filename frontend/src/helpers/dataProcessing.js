export const expenseToDataPoints = (expenses) => {
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
