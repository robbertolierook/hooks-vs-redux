export const addAlert = text => dispatch => {
  dispatch({
    type: "ADD_ALERT",
    text
  });
};

export const setFavorite = key => dispatch => {
  dispatch({
    type: "SET_FAVORITE",
    key
  });
};
