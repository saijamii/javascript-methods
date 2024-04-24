// import logo from "./logo.svg";
import "./App.css";
// import ReduceMethod from "./ReduceMethod";
// import JavaArray from "./JavaArray";
// import Response from "./Response";
// import Prac from "./Prac";
// import Call from "./C1/Call";
// import Classes from "./C1/Classes";
// import { Promisese1, Promisese2 } from "./C1/Promise";
// import { Counter } from "./R1/RUseReducer";
// import { MyUseMemo1, MyUseMemo2, MyUseMemo3 } from "./R1/RUseMemo";
// import { PUseCallBack } from "./R1/PUseCallBack";
// import Comp1 from "./Hooks/Exp1/Comp1";
// import Comp2 from "./Hooks/Exp1/Comp2";
// import Counter1 from "./Hooks/Exp2/Counter1";
// import Counter2 from "./Hooks/Exp2/Counter2";
// import Api1 from "./Hooks/Exp3/Api1";
// import Api2 from "./Hooks/Exp3/Api2";
import Test from "./Test";

function App() {
  const appVersion = "v29.03.24.04";
  console.log(appVersion, "appVersion");
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        <MyUseMemo3 />
        <PUseCallBack /> */}
        {/* <Api1 />
        <br />
        <Api2 /> */}
        <Test/>
      </header>
    </div>
  );
}

export default App;
