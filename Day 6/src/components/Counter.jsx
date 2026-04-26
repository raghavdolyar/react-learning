import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function Counter() {

    const { count, setCount } = useContext(CounterContext);

    return (
        <>
            <h2>Counter : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    );

}
