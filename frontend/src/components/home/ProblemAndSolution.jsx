import ProblemItem from "./ProblemItem";

const problemSolution = {
  problem: {
    title: "Problem",
    content:
      "Users struggle to consolidate their financial data, as expenses, subscriptions, and diverse assets are scattered across various platforms, making it challenging to gain a comprehensive view of their financial health.",
    list: [
      "Users are burdened with the task of juggling multiple accounts across various platforms and exchanges, which eventually will lead to inefficiencies and a lack of holistic financial oversight. ",
      "Managing cryptocurrency portfolios across multiple exchanges is complex and time-consuming. Users are required to maintain numerous exchange accounts, leading to potential security risks and difficulties in tracking their crypto investments effectively.",
    ],
  },
  solution: {
    title: "Solution",
    content:
      "Expensier seeks to address these issues by providing a streamlined and comprehensive solution that will consolidate all financial data, including expenses, subscriptions, and cryptocurrencies, into a single, user-friendly platform.",
    list: [
      "Expensier will serve as a unified hub where users can effortlessly track and manage their expenses, subscriptions, and financial assets, including cryptocurrencies.",
      "By integrating with multiple exchanges via APIs, Expensier will enable users to manage their portfolios seamlessly. Users will receive real-time updates on the performance of their investments, helping them make informed financial decisions.",
    ],
  },
};

const ProblemAndSolution = () => {
  const { problem, solution } = problemSolution;
  return (
    <div className="bg-gray-100 pt-10 pb-10 flex flex-col justify-evenly gap-4 md:pt-56 md:pb-10 md:flex-row">
      <ProblemItem
        title={problem.title}
        content={problem.content}
        list={problem.list}
      />
      <ProblemItem
        title={solution.title}
        content={solution.content}
        list={solution.list}
        reversed
      />
    </div>
  );
};

export default ProblemAndSolution;
