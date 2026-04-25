import { useRef, useState } from 'react'
import './App.css'

export default function App() {

  const [time, setTime] = useState(0);
  const intervalId = useRef(null);

  function handleStart() {

    if (intervalId.current != null) {
      return;
    }

    intervalId.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);

  }

  function handleStop() {
    clearInterval(intervalId.current);
    intervalId.current = null;
  }

  function handleReset() {
    handleStop();
    setTime(0);
  }

  return (
    <>

      <h2>Stop Watch : {time}</h2>

      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>

    </>
  )
}
