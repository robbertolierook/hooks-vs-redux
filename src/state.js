import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import reducer from "./reducers";

const initialState = { alerts: [] };

export const GlobalState = createContext();

export const StateProvider = ({ children }) => (
  <GlobalState.Provider value={useReducer(reducer, initialState)}>
    {children}
  </GlobalState.Provider>
);

StateProvider.propTypes = {
  /**
   * @return {React.Node}
   */
  children: PropTypes.node.isRequired,

  /**
   * Object containing initial state value.
   */
  initialState: PropTypes.shape({}).isRequired,

  /**
   *
   * @param {object} state
   * @param {object} action
   */
  reducer: PropTypes.func.isRequired
};

export const useStateValue = () => useContext(GlobalState);
