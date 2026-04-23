import { useState } from "react";
import './App.css'

export default function App() {

  const [count, setCount] = useState(0);

  function clickHandler() {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <p className="counter-text">Counter : {count}</p>
      <button className="btn" onClick={clickHandler}>Increment</button>
    </div>
  );
}