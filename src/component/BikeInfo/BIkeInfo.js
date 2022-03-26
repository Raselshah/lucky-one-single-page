import React from "react";
import "./BikeInfo.css";

const BIkeInfo = ({ singleBike }) => {
  const { name, picture } = singleBike;
  return (
    <div className="shopping-card">
      {/* <h1>{id}</h1> */}
      <div className="photos">
        <img src={picture} alt="" />
      </div>
      <h3>{name}</h3>
    </div>
  );
};

export default BIkeInfo;
