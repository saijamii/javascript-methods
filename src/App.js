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
import { MyUseMemo1, MyUseMemo2, MyUseMemo3 } from "./R1/RUseMemo";
import { PUseCallBack } from "./R1/PUseCallBack";
import Page1 from "./Hooks/example1/Page1";
import Page2 from "./Hooks/example1/Page2";

function App() {
  const appVersion = "v07.03.24.02";
  console.log(appVersion, "appVersion");
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <ReduceMethod />
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
        <MyUseMemo3 />
        <PUseCallBack /> */}

        <Page1 />
        <Page2 />
      </header>
    </div>
  );
}

export default App;
