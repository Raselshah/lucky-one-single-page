import "./App.css";
import LoadBikes from "./component/LoadBikes/LoadBikes";

function App() {
  return (
    <div className="App">
      <h1>Big Bike Hunt</h1>
      <LoadBikes></LoadBikes>
      <h2>How React Work ?</h2>
      <p>
        React is a JavaScript library that creates user interfaces in a
        predictable and efficient way using declarative code. You can use it to
        help build single page applications.
      </p>

      <h2>Props vs State</h2>
      <p>
        props : <br /> 1.Read Only <br /> 2.describes what we see
        <br />
        State : <br /> 1. Influence Output <br /> 2. Must be declare useState()
      </p>
    </div>
  );
}

export default App;
