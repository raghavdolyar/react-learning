import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./Form.css";

const formSchema = z.object({
    username: z
        .string()
        .min(3, "Username should be at least 3 characters")
        .max(20, "Username should not exceed 20 characters"),

    age: z
        .coerce.number()
        .min(18, "You must be at least 18 years old")
        .max(80, "Age must be 80 or below"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(20, "Password must not exceed 20 characters")
        .regex(/[A-Z]/, "Must contain at least one uppercase letter")
        .regex(/[a-z]/, "Must contain at least one lowercase letter")
        .regex(/[0-9]/, "Must contain at least one number")
        .regex(/[@$!%*?&]/, "Must contain at least one special character (@$!%*?&)")
});

export default function Form() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "onSubmit", reValidateMode: "onChange", resolver: zodResolver(formSchema) });

    const [hidePassword, setHidePassword] = useState(true);

    // you can also add { mode: "onSubmit", reValidateMode: "onSubmit" } inside useForm
    // this enables showing errors only after each submit

    function submitForm(data) {
        console.log(data);
        reset();
    }

    console.log("render");

    return (
        <div className="form-container">

            <h2 className="form-heading">User Login</h2>

            <form autoComplete="off" onSubmit={handleSubmit(submitForm)}>

                <div className="box">
                    <label htmlFor="first">Username:</label>
                    <input type="text" placeholder="Enter Username" id="first" {...register('username')} />
                    <div className={`error ${errors.username ? 'show' : ''}`}>{errors.username?.message}</div>
                </div>

                <div className="box">
                    <label htmlFor="second">Age:</label>
                    <input type="number" placeholder="Enter Age" id="second" {...register('age')} />
                    <div className={`error ${errors.age ? 'show' : ''}`}>{errors.age?.message}</div>
                </div>

                <div className="box">

                    <label htmlFor="third">Password:</label>

                    <div className="password-wrapper">

                        <input
                            placeholder="Enter Password" id="third"
                            type={hidePassword ? "password" : "text"}
                            {...register("password")}
                        />

                        <button
                            type="button"
                            className="eye-btn"
                            onClick={() => setHidePassword(!hidePassword)}
                        >
                            {hidePassword ? <FiEye /> : <FiEyeOff />}
                        </button>

                    </div>

                    <div className={`error ${errors.password ? 'show' : ''}`}>{errors.password?.message}</div>

                </div>

                <button className="submit-btn">Submit</button>

            </form>

        </div>
    );
}
