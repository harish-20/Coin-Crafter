import { useEffect, useRef, useState } from "react";

import AvailableSorts from "./AvailableSorts";

import SortIcon from "../../UI/Icons/SortIcon";

const availableSortOptions = [
  {
    id: 1,
    value: "",
    text: "No Filter",
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

const Sorts = () => {
  const [sortOption, setSortOption] = useState(availableSortOptions[0].text);
  const [isSortOptionOpen, setIsSortOptionOpen] = useState(false);

  const sortIconRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideSort = (event) => {
      const isClickMadeOutside =
        event.target !== sortIconRef.current &&
        !sortIconRef.current.contains(event.target);

      if (isClickMadeOutside) setIsSortOptionOpen(false);
    };
    document.addEventListener("click", handleClickOutsideSort);

    return () => document.removeEventListener("click", handleClickOutsideSort);
  }, []);

  const handleChange = (selectedValue) => {
    setSortOption(selectedValue.text);
  };

  const toggleSortOptionOpen = () => {
    setIsSortOptionOpen(!isSortOptionOpen);
  };
  return (
    <div className="relative mt-6 flex items-center cursor-pointer">
      <div
        ref={sortIconRef}
        className="flex gap-2"
        onClick={toggleSortOptionOpen}
      >
        {sortOption}
        <SortIcon />
      </div>

      <AvailableSorts
        isOpen={isSortOptionOpen}
        onChange={handleChange}
        availableSortOptions={availableSortOptions}
      />
    </div>
  );
};

export default Sorts;
