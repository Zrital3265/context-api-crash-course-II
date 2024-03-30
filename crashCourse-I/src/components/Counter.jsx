import { useContext } from "react";
import { CounterContext } from "../context/UserCounter";

const Counter = () => {
  const counterContext = useContext(CounterContext);
  console.log("counterContext", counterContext);

  return (
    <div className="text-base ">
      <button
        className="mr-2 font-light text-white bg-gray-700 "
        onClick={() => counterContext.setCount(counterContext.Count + 1)}
      >
        Increment
      </button>
      <button
        className="font-light text-white bg-gray-700"
        onClick={() => counterContext.setCount(counterContext.Count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
