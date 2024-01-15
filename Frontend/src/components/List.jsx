// List.jsx
import React, { useEffect, useState } from "react";
import Card from "./Card";

const List = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      let res = await fetch("http://localhost:3000");
      let data = await res.json();
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data");
      setLoading(false);
    }
  };

  const addToCart = (cartItem) => {
    setCart([...cart, cartItem]);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div>Cart Total: {cartTotal}/-</div>
      <div className="container d-flex flex-wrap gap-2">
        {items.map((e) => (
          <div key={e.id}>
            <Card item={e} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
