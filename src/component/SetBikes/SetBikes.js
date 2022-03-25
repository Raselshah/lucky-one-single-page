import React from "react";
import "./SetBikes.css";

const SetBikes = ({ bike }) => {
  console.log(bike);
  const { name, price, picture } = bike;
  return (
    <div className="card">
      <div className="photo">
        <img src={picture} alt="" />
      </div>
      <div className="card-info">
        <div className="cart-details">
          <h2>{name}</h2>
          <h3>Price : ${price}</h3>
        </div>
        <button className="btn-add">
          <p>Add to Buy</p>
        </button>
      </div>
    </div>
  );
};

export default SetBikes;
