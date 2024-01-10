import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.price}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
