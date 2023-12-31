import React from "react";
import FilterItem from "./FilterItem";

const Filters = () => {
  return (
    <div className="flex my-4 items-center">
      <h3 className="mr-5">Filters :</h3>
      <div>
        <FilterItem />
      </div>
    </div>
  );
};

export default Filters;
