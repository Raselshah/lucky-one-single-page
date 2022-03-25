import { useEffect, useState } from "react";
import "./App.css";
import LoadBikes from "./component/LoadBikes/LoadBikes";

function App() {
  const [bikes, setBike] = useState([]);
  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setBike(data));
  }, []);

  // console.log(bike);
  // const { picture } = bike;

  return (
    <div className="App">
      <LoadBikes></LoadBikes>
    </div>
  );
}

export default App;
