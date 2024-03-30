const Items = ({ name, price }) => {
  return (
    <div className="item-card" style={{ textAlign: "center" }}>
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button>Add To Cart</button>
    </div>
  );
};

export default Items;
