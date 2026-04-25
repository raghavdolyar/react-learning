import { useRef } from "react";
import './Login.css'

export default function Login() {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    console.log("render");

    function handleSubmit(event) {

        event.preventDefault();

        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

        emailRef.current.value = "";
        passwordRef.current.value = "";

    }

    return (
        <div className="form-container">

            <form onSubmit={handleSubmit}>

                <div className="box">
                    <label>Email : </label>
                    <input type="email" ref={emailRef}></input>
                </div>

                <div className="box">
                    <label>Password : </label>
                    <input type="password" ref={passwordRef}></input>
                </div>

                <button type="submit">Submit</button>

            </form>

        </div>
    );
}
