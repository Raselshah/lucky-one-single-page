import React, { useEffect, useState } from "react";
import BIkeInfo from "../BikeInfo/BIkeInfo";
import LuckyBike from "../LuckyBike/LuckyBike";
import SetBikes from "../SetBikes/SetBikes";
import "./LoadBikes.css";

const LoadBikes = () => {
  const [bikes, setBike] = useState([]);
  const [addCart, setAddCart] = useState([]);
  const [LuckyBiker, setLuckyBike] = useState([]);
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

  const luckyBike = () => {
    const MatchBike = Math.round(Math.random() * 12);
    setLuckyBike(addCart);
    console.log(MatchBike);
    return MatchBike;
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
        {<LuckyBike LuckyBike={LuckyBiker}></LuckyBike>}
        <div className="lucky-bike-btn">
          <button onClick={deleteSelected}>Delete selected</button>
          <button onClick={luckyBike}>Your lucky bike</button>
        </div>
      </div>
    </div>
  );
};

export default LoadBikes;
