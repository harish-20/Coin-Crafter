export const getUser = {
  pending: (state, action) => {
    state.isUserLoading = true;
  },
  fulfilled: (state, action) => {
    state.userDetails = action.payload;
    state.isUserLoading = false;
  },
};
