import Items from "./components/Items";
import "./App.css";
import Cart from "./components/CartCheckout";

const App = () => {
  return (
    <div>
      <Items name="Lenovo Thinkpad69" price={400000} />
      <Items name="Macbook Air Pro" price={4500000} />
      <Items name="HP victus 69" price={80000} />
      <Items name="xiaomi yoga pad" price={100000} />
      <Cart />
    </div>
  );
};

export default App;
