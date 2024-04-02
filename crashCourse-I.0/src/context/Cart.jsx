import PropTypes from "prop-types"; // Import PropTypes
import { createContext, useState } from "react";

// /creating a global data warehouse/;
export const CartContext = createContext(null);

export const CartProvider = (props) => {
  const [Item, setItem] = useState([]);
  return (
    <CartContext.Provider value={{ Item, setItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node, // Accept any valid React node as children
};
