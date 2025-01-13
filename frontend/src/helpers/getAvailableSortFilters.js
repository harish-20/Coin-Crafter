const availableSortOptions = [
  {
    id: 1,
    value: "",
    text: "No Sort",
    sortOption: {},
  },
  {
    id: 2,
    value: "amount-asc",
    text: "Amount Low to High",
    sortOption: { amount: 1 },
  },
  {
    id: 3,
    value: "amount-desc",
    text: "Amount High to Low",
    sortOption: { amount: -1 },
  },
  { id: 4, value: "date-asc", text: "By Oldest", sortOption: { date: 1 } },
  { id: 5, value: "date-desc", text: "By Latest", sortOption: { date: -1 } },
];

export default () => availableSortOptions;
