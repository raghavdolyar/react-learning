import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function Display() {

    const { count } = useContext(CounterContext);

    return (
        <>
            <h2>I am Display</h2>
            <p>Value of count : {count}</p>
        </>
    );

}
