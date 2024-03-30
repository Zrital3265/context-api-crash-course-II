// Context(warehouse)
// Provider (delivery girl)
// consumer / useContext() hook/

import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
  const [Count, setCount] = useState(0);
  // the props.children represents the components wrapped by CounterProvider
  return (
    <CounterContext.Provider value={{ Count, setCount }}>
      {props.children}
    </CounterContext.Provider>
  );
};
CounterProvider.propTypes = {
  children: PropTypes.node, // Accept any valid React node as children
};
