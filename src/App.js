import logo from "./logo.svg";
import "./App.css";
import ReduceMethod from "./ReduceMethod";
import JavaArray from "./JavaArray";
import Response from "./Response";
import Prac from "./Prac";
import Call from "./C1/Call";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo-rev" alt="logo" />
        <p>{/* Edit <code>src/App.js</code> and save to reload. */}</p>
        <ReduceMethod />
        <JavaArray />
        <Response />
        <Prac />
        <Call />
      </header>
    </div>
  );
}

export default App;
