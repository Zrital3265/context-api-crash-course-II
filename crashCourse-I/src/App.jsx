import { useContext } from "react";
import "./App.css";
import { CounterContext } from "./context/UserCounter";
import Counter from "./components/Counter";

function App() {
  // consuming the content
  const counterState = useContext(CounterContext);
  console.log("Count", counterState);
  return (
    <>
      <div>
        <div className="space-y-1 text-3xl text-center text-gray-950 ">
          {/* {count} */}
          <h1 className="text-white">{counterState.Count}</h1>
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
