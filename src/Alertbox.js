import React from "react";
import { Alert, Button } from "@olierook/global-react-components";
import { useStateValue } from "./state";
import { toggleFavorite } from "./actions/actionCreators";

const Alertbox = ({ text, alertType, id }) => {
  const [, dispatch] = useStateValue();
  // const handeClick = e => {
  //   let dispObj = {
  //     type: "SET_FAVORITE",
  //     key: id
  //   };
  //   if (alertType === "success") {
  //     dispObj = {
  //       type: "UNSET_FAVORITE",
  //       key: id
  //     };
  //   }
  //   dispatch(dispObj);
  // };
  const handeClick = e => {
    return toggleFavorite(id, alertType)(dispatch);
  };
  return (
    <div
      style={{
        width: "28%",
        border: "1px solid black",
        margin: 20,
        display: "inline-block",
        padding: "0 0 20px 0"
      }}
    >
      <Alert
        header={
          alertType === "danger"
            ? "Not my favorite"
            : alertType === "success"
            ? "My favorite!"
            : "Used to be my favorite"
        }
        danger={alertType === "danger" ? true : false}
        warning={alertType === "warning" ? true : false}
      >
        {text}
      </Alert>
      <Button
        tertiary={alertType === "success" ? false : true}
        onClick={handeClick}
        small
      >
        {alertType === "success" ? "Unset as favorite" : "Set as favorite"}
      </Button>
    </div>
  );
};

export default Alertbox;
