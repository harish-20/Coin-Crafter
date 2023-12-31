import Layout from "../components/shared/Layout/Layout";
import Charts from "../components/dashboard/Charts/Charts";
import ExpenseList from "../components/shared/ExpenseList/ExpenseList";

const dummyData = [
  {
    id: 1,
    title: "Groceries",
    category: { icon: "grocery-icon.png", expenseType: "spent" },
    amount: 50.0,
    date: "2023-12-20",
    time: "12:00 PM",
  },
  {
    id: 2,
    title: "Salary",
    category: { icon: "salary-icon.png", expenseType: "earned" },
    amount: 2000.0,
    date: "2023-12-21",
    time: "3:30 PM",
  },
  {
    id: 3,
    title: "Dinner",
    category: { icon: "restaurant-icon.png", expenseType: "spent" },
    amount: 30.0,
    date: "2023-12-22",
    time: "7:00 PM",
  },
  {
    id: 4,
    title: "Freelance Work",
    category: { icon: "freelance-icon.png", expenseType: "earned" },
    amount: 500.0,
    date: "2023-12-23",
    time: "10:00 AM",
  },
  {
    id: 5,
    title: "Shopping",
    category: { icon: "shopping-icon.png", expenseType: "spent" },
    amount: 100.0,
    date: "2023-12-24",
    time: "2:00 PM",
  },
  {
    id: 6,
    title: "Gym Membership",
    category: { icon: "gym-icon.png", expenseType: "spent" },
    amount: 30.0,
    date: "2023-12-25",
    time: "9:00 AM",
  },
  {
    id: 7,
    title: "Web Development Project",
    category: { icon: "coding-icon.png", expenseType: "earned" },
    amount: 800.0,
    date: "2023-12-26",
    time: "1:30 PM",
  },
];

const DashBoard = () => {
  return (
    <Layout>
      <Charts />
      <ExpenseList expenses={dummyData} />
    </Layout>
  );
};

export default DashBoard;
