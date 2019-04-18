import React, { Component } from "react";
import { Alert, Button } from "@olierook/global-react-components";

export default class extends Component {
  // setFavorite = () => {
  //   // setFavorite(this.props.id);
  //   // console.log(this.props.setFavorite(this.props.id));
  //   console.log(this.props.setFavorite);
  // };

  render() {
    console.log(this.props);
    const { text, alertType } = this.props;
    return (
      <div
        style={{
          width: "28%",
          border: "1px solid black",
          margin: 20,
          display: "inline-block"
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
          onClick={this.props.toggleFavorite.bind(
            null,
            this.props.id,
            this.props.alertType
          )}
          small
        >
          {alertType === "success" ? "Unset as favorite" : "Set as favorite"}
        </Button>
      </div>
    );
  }
}
