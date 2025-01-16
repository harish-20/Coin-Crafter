export const getAvailableFilter = {
  pending: (state, action) => {
    state.loadingState.isAvailableFilterLoading = true;
  },
  fulfilled: (state, action) => {
    state.loadingState.isAvailableFilterLoading = false;
    state.availableFilters.yearFilters = action.payload;

    // Set default filters (recent year and month) if not already set
    if (action.payload.length) {
      if (!state.filters.year && !state.filters.month) {
        state.filters.year = action.payload[0].year;
        state.filters.month = action.payload[0].months[0];
      }
    }
  },
};

export const getFilteredData = {
  pending: (state, action) => {
    state.loadingState.isFilteredDataLoading = true;
  },
  fulfilled: (state, action) => {
    state.loadingState.isFilteredDataLoading = false;
    state.data = action.payload;
  },
};
