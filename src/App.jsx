import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Redux/counterSlice";

function App() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <div>
        {counter < 10 && (
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        )}
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card" style={{ display: "flex", gap: "20px" }}>
        <button onClick={handleDecrement}>-</button>

        <h2>count is {counter}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
