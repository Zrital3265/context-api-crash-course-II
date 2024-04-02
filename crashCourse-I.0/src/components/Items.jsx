import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/Cart";

const Items = ({ name, price }) => {
  const Cart = useContext(CartContext);
  console.log("CArt", Cart);

  return (
    <div className="item-card" style={{ textAlign: "center" }}>
      <h4>{name}</h4>
      <p>Price: Rs.{price}</p>

      <button
        onClick={() =>
          Cart.setItem([...Cart.Item, { name: { name }, price: { price } }])
        }
        style={{ backgroundColor: "black", color: "white" }}
      >
        Add To Cart
      </button>
    </div>
  );
};
// PropTypes validation
Items.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Items;
