export const setUser = (state, action) => {
  state.userDetails = action.payload;
};

export const resetUser = (state, action) => {
  state.userDetails = null;
};
