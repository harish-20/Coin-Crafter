export const togglePopup = (state, action) => {
  const popupType = action.payload;

  state.currentPopup = popupType;
};
