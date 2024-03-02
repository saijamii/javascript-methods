import logo from "./logo.svg";
import "./App.css";
import ReduceMethod from "./ReduceMethod";
import JavaArray from "./JavaArray";
import Response from "./Response";
import Prac from "./Prac";
import Call from "./C1/Call";
import Classes from "./C1/Classes";
import { Promisese1, Promisese2 } from "./C1/Promisese";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <img src={logo} className="App-logo-rev" alt="logo" /> */}
        <p>{/* Edit <code>src/App.js</code> and save to reload. */}</p>
        {/* <ReduceMethod /> */}
        {/* <JavaArray /> */}
        {/* <Response /> */}
        <Prac />
        {/* <Call /> */}
        {/* <Classes /> */}
        <Promisese1 />
        <Promisese2 />
      </header>
    </div>
  );
}

export default App;
