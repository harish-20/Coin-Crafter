export const getAvailableFilterPending = (state, action) => {
  state.loadingState.isAvailableFilterLoading = true;
};

export const getAvailableFilterFulFilled = (state, action) => {
  state.loadingState.isAvailableFilterLoading = false;
  state.availableFilters.yearFilters = action.payload;

  // making the recent month and year as default filter
  if (action.payload.length) {
    if (!state.filters.year && !state.filters.month) {
      state.filters.year = action.payload[0].year;
      state.filters.month = action.payload[0].months[0];
    }
  }
};

export const getFilteredDataPending = (state, action) => {
  state.loadingState.isFilteredDataLoading = true;
};

export const getFilteredDataFulfilled = (state, action) => {
  state.loadingState.isFilteredDataLoading = false;
  state.data = action.payload;
};
