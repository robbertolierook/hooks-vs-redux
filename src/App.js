import React from "react";
import { Button } from "@olierook/global-react-components";
import Alertbox from "./Alertbox";
import { addAlert } from "./actions/actionCreators";
import { useStateValue } from "./state";

const App = props => {
  const [{ alerts }, dispatch] = useStateValue();
  const alertForm = React.useRef(null);
  const alertText = React.useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    const text = alertText.current.value;
    addAlert(text)(dispatch);
    alertForm.current.reset();
  };

  const renderAlerts = (alert, i) => <Alertbox {...alert} key={i} id={i} />;

  return (
    <>
      <form ref={alertForm} onSubmit={handleSubmit}>
        <Button type="submit" secondary>
          Add an alert
        </Button>
        <input
          style={{ margin: 20, height: 50 }}
          type="text"
          ref={alertText}
          placeholder="Write an alert"
        />
      </form>
      {alerts.map(renderAlerts)}
    </>
  );
};

export default App;
