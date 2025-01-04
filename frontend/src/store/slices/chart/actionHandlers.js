export const setFilters = (state, action) => {
  if (action.payload.year) {
    // If the year change we need to set a available month for that year
    state.filters.year = action.payload.year;
    const selectedYear = state.availableFilters.yearFilters.find(
      (yearFilter) =>
        yearFilter.year.toString() === action.payload.year.toString()
    );
    state.filters.month = selectedYear.months[0];
  } else {
    state.filters = { ...state.filters, ...action.payload };
  }
};
