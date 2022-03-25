import React, { useEffect, useState } from "react";
import SetBikes from "../SetBikes/SetBikes";
import "./LoadBikes.css";

const LoadBikes = () => {
  const [bikes, setBike] = useState([]);
  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setBike(data));
  }, []);

  const shoppingNow = (name) => {
    console.log(name);
  };

  //   const { price, picture, name } = bike;
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
        <h2>hi</h2>
      </div>
    </div>
  );
};

export default LoadBikes;
