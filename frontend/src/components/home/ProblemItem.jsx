import React from "react";

const ProblemItem = (props) => {
  const { title, content, list, reversed } = props;
  return (
    <div
      className={`flex-1 flex flex-col gap-8 px-4 ${
        reversed ? "md:flex-col-reverse" : ""
      }`}
    >
      <h2 className="text-2xl text-green-800 font-bold">{title}</h2>

      <div className="rounded-lg flex-1 shadow-lg mx-auto bg-white">
        <div
          className={`${
            reversed ? "bg-gray-200" : "bg-gray-50"
          } m-2 p-3 rounded-lg`}
        >
          <div className="text-green-800 font-semibold px-4 py-5">
            {content}
          </div>
          <hr className="border-gray-500 border-1 w-11/12 mx-auto" />
          <div>
            <ol className="flex flex-col gap-2 text-green-800 list-decimal mt-3 p-2 pl-7">
              {list.map((item) => (
                <li className="text-green-800" key={item}>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemItem;
