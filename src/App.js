import logo from "./logo.svg";
import "./App.css";
import ReduceMethod from "./ReduceMethod";
import JavaArray from "./JavaArray";
import Response from "./Response";
import Prac from "./Prac";
import Call from "./C1/Call";
import Classes from "./C1/Classes";
import { Promisese1, Promisese2 } from "./C1/Promise";
import { Counter } from "./R1/RUseReducer";
import { MyUseMemo1, MyUseMemo2 } from "./R1/RUseMemo";

function App() {
  const appVersion = "v01.03.24.02";
  console.log(appVersion, "appVersion");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ReduceMethod />
        <JavaArray />
        <Response />
        <Prac />
        <Call />
        <Classes />
        <Promisese1 />
        <Promisese2 />
        <Counter />
        <MyUseMemo1 a={10} b={80} />
        <MyUseMemo2 />
      </header>
    </div>
  );
}

export default App;
