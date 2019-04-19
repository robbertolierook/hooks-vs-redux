import alertReducer from "./alerts";

export default ({ alerts }, action) => ({
  alerts: alertReducer(alerts, action)
});
