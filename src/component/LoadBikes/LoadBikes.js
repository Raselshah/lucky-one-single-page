import React, { useEffect, useState } from "react";
import BIkeInfo from "../BikeInfo/BIkeInfo";
import SetBikes from "../SetBikes/SetBikes";
import "./LoadBikes.css";

const LoadBikes = () => {
  const [bikes, setBike] = useState([]);
  const [addCart, setAddCart] = useState([]);
  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setBike(data));
  }, []);
  const shoppingNow = (bike) => {
    const newBike = [...addCart, bike];
    if (newBike.length > 4) {
      alert("Your Maximum Added");
      return;
    }
    setAddCart(newBike);
  };
  const deleteSelected = () => {
    setAddCart([]);
  };

  return (
    <div className="cards">
      <div className="bikes">
        {bikes.map((bike) => (
          <SetBikes
            shoppingNow={shoppingNow}
            bike={bike}
            key={bike.id}
          ></SetBikes>
        ))}
      </div>
      <div className="shopping-cart">
        {addCart.map((singleBike) => (
          <BIkeInfo key={singleBike.id} singleBike={singleBike}></BIkeInfo>
        ))}
        <div className="lucky-bike-btn">
          <button onClick={deleteSelected}>Delete selected</button>
          <button>Your lucky bike</button>
        </div>
      </div>
    </div>
  );
};

export default LoadBikes;
