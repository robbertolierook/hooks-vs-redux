export const addAlert = text => dispatch => {
  dispatch({
    type: "ADD_ALERT",
    text
  });
};

export const toggleFavorite = (key, alertType) => dispatch => {
  let dispObj = {
    type: "SET_FAVORITE",
    key
  };
  if (alertType === "success") {
    dispObj = {
      type: "UNSET_FAVORITE",
      key
    };
  }
  dispatch(dispObj);
};
