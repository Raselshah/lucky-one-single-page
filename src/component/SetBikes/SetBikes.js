import React from "react";
import "./SetBikes.css";
import { RiShoppingCart2Line } from "react-icons/ri";

const SetBikes = ({ bike, shoppingNow }) => {
  //   console.log(bike);
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
        <button onClick={() => shoppingNow(bike)} className="btn-add">
          <div className="btn-size">
            <p>Add to Buy</p>
            <RiShoppingCart2Line className="icon" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SetBikes;
