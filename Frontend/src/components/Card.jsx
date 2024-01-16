// Card.jsx
import React, { useState } from "react";

const Card = ({ item, addToCart }) => {
  const [qty, setQty] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: parseInt(qty, 10),
    });
    setAddedToCart(true);
  };

  return (
    <>
      <div
        className="card d-flex flex-column justify-content-center align-items-center"
        style={{ width: "17rem" }}
        key={item.id}
      >
        <img
          src="https://wallpapers.com/images/hd/blank-white-background-xbsfzsltjksfompa.jpg"
          className="card-img-top border rounded-bottom"
          alt=""
        />
        <div className="card-body w-100">
          <h5 className="card-title">{item.name}</h5>

          <p className="card-text">Price : {item.price}/-</p>
          <div className="container d-flex justify-content-start gap-5">
            <select
              name=""
              id=""
              onChange={(e) => {
                setQty(e.target.value);
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <div className="container d-flex justify-content-start gap-5">
              Total : {item.price * qty}/-
            </div>
          </div>
          <button
            className="btn btn-sm btn-transperent mt-3 "
            onClick={handleAddToCart}
          >
            {addedToCart ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
