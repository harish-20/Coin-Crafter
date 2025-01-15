export const getUserPending = (state, action) => {
  state.isUserLoading = true;
};

export const getUserFulfilled = (state, action) => {
  state.userDetails = action.payload;
  state.isUserLoading = false;
};
