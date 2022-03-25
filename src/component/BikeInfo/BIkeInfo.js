import React from "react";
import "./BikeInfo.css";

const BIkeInfo = ({ singleBike }) => {
  console.log(singleBike);
  const { name, picture } = singleBike;
  return (
    <div>
      <div className="photos">
        <img src={picture} alt="" />
      </div>
      <h2>{name}</h2>
    </div>
  );
};

export default BIkeInfo;
