export default (state = [], action) => {
  switch (action.type) {
    case "ADD_ALERT":
      return [...state, { text: action.text, alertType: "danger" }];
    case "SET_FAVORITE": {
      const newState = state.map(a => {
        if (a.alertType === "success") {
          a.alertType = "warning";
        } else if (a.alertType === "warning") {
          a.alertType = "danger";
        }
        return { ...a };
      });
      newState[action.key].alertType = "success";
      return newState;
    }
    case "UNSET_FAVORITE": {
      console.log("heya");
      const newState = state.map(a => {
        if (a.alertType === "warning") {
          a.alertType = "danger";
        }
        return { ...a };
      });
      console.log(newState[action.key].alertType);
      newState[action.key].alertType = "warning";
      console.log(newState[action.key].alertType);
      return newState;
    }
    default:
      return state;
  }
};
