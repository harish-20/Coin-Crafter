import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AvailableSorts from "./AvailableSorts";

import SortIcon from "../../UI/Icons/SortIcon";

import { expenseActions } from "../../../store/slices/expense/expenseSlice";

import getAvailableSortFilters from "../../../helpers/getAvailableSortFilters";

const availableSortOptions = getAvailableSortFilters();

const Sorts = () => {
  const [sortOption, setSortOption] = useState(availableSortOptions[0].text);
  const [isSortOptionOpen, setIsSortOptionOpen] = useState(false);

  const sortIconRef = useRef(null);

  const dispatch = useDispatch();

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
    dispatch(expenseActions.toggleSort({ ...selectedValue.sortOption }));
  };

  const toggleSortOptionOpen = () => {
    setIsSortOptionOpen(!isSortOptionOpen);
  };
  return (
    <div className="mt-2 ml-auto relative flex items-center cursor-pointer md:mt-6">
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
