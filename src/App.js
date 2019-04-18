import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@olierook/global-react-components";
import Alertbox from "./Alertbox";
import { addAlert, setFavorite } from "./actions/actionCreators";

class App extends Component {
  addAlert = e => {
    e.preventDefault();
    const text = this.refs.text.value;
    this.props.addAlert(text);
    this.refs.alertForm.reset();
  };

  renderAlerts = (alert, i) => (
    <Alertbox {...alert} setFavorite={this.props.setFavorite} key={i} id={i} />
  );

  render() {
    return (
      <>
        <form ref="alertForm" onSubmit={this.addAlert}>
          <Button type="submit" secondary>
            Add an alert
          </Button>
          <input
            style={{ margin: 20, height: 50 }}
            type="text"
            ref="text"
            placeholder="Write an alert"
          />
        </form>
        {this.props.alerts.map(this.renderAlerts)}
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  addAlert: text => dispatch(addAlert(text)),
  setFavorite: key => dispatch(setFavorite(key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
