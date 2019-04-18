export default (state = [], action) => {
  switch (action.type) {
    case "ADD_ALERT":
      return [...state, { text: action.text, alertType: "danger" }];
    case "SET_FAVORITE":
      const newState = state.map(a => {
        return { ...a };
      });
      newState[action.key].alertType = "success";
      return newState;
    default:
      return state;
  }
};
