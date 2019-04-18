export default (state = [], action) => {
  const toggle = toSet => {
    const newState = state.map(a => {
      if (a.alertType === "warning") {
        a.alertType = "danger";
      }
      if (toSet) {
        if (a.alertType === "success") {
          a.alertType = "warning";
        }
      }
      return { ...a };
    });
    newState[action.key].alertType = toSet ? "success" : "warning";
    return newState;
  };
  switch (action.type) {
    case "ADD_ALERT":
      return [...state, { text: action.text, alertType: "danger" }];
    case "SET_FAVORITE": {
      return toggle(true);
    }
    case "UNSET_FAVORITE": {
      return toggle(false);
    }
    default:
      return state;
  }
};
