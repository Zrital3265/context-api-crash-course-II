// Context(warehouse)
// Provider (delivery girl)
// consumer / useContext() hook/

import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

// creating a warehouse that holds all the datas
export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
  const [Count, setCount] = useState(0);
  return (
    // provoding the context here
    <CounterContext.Provider value={{ Count, setCount }}>
      {props.children}
    </CounterContext.Provider>
    // the props.children represents the components wrapped by CounterProvider
  );
};
CounterProvider.propTypes = {
  children: PropTypes.node, // Accept any valid React node as children
};
