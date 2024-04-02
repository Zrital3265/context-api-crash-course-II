import { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
  const cartContext = useContext(CartContext);

  const total = cartContext.Item.reduce((x, z) => x + z.price.price, 0);
  console.log(total);

  return (
    <div className="cart" style={{ textAlign: "center" }}>
      <h2>Total Cart:</h2>

      {/* Rendering the list of items if CartContext exists */}

      {cartContext &&
        cartContext.Item.map((item, index) => (
          <li key={item.name + index}>
            {item.name.name} - Rs.{item.price.price}
          </li>
        ))}

      <h5>Total Bill: Rs.{total} </h5>
    </div>
  );
};

export default Cart;
