import React, { useEffect, useState } from "react";
import Card from "./Card";
const List = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      let res = await fetch("http://localhost:3000");
      let data = await res.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      {items.map((e) => (
        <>
          <div key={e.id}>
            {e.name}
            <Card item={e} />
          </div>
        </>
      ))}
    </>
  );
};

export default List;
