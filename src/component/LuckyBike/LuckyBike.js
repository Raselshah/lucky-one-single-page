import React from "react";

const LuckyBike = ({ LuckyBike, MatchBike }) => {
  console.log(MatchBike);
  //   console.log(LuckyBike);
  for (const myBike of LuckyBike) {
    console.log("random", MatchBike);
    if (MatchBike === myBike.id) {
      console.log("bike", myBike);
    }
    // console.log(myBike.id);
  }
  //   LuckyBike.map((myBike) => console.log(myBike));
  //   const { id } = LuckyBike.LuckyBike;
  //   console.log(id);
  return <div>{/* <h2>Hello {id}</h2> */}</div>;
};

export default LuckyBike;
