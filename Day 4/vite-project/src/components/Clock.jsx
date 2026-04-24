import { useEffect, useState } from "react";
import './Clock.css'

export default function Clock() {

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [show, setShow] = useState(true);

    useEffect(() => {

        if (!show) {
            return;
        }

        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer); // this runs when the component disappears (when value of show changes)

    }, [show]);

    return (
        <div className="clock-container">

            <div className={`clock ${show ? `` : `hidden`}`}>
                {show && <span>Current Time : {time}</span>}
            </div>

            <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>

        </div>
    );

}
