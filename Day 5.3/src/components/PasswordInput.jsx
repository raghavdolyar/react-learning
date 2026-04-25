import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import './PasswordInput.css';

export default function PasswordInput({ label, id, register, error, placeholder }) {

    const [isHidden, setIsHidden] = useState(true);

    return (

        <div className="box">

            <label htmlFor={id}>{label}</label>

            <div className="password-wrapper">

                <input
                    id={id}
                    placeholder={placeholder}
                    type={isHidden ? "password" : "text"}
                    {...register}
                />

                <button
                    type="button"
                    className="eye-btn"
                    onClick={() => setIsHidden(!isHidden)}
                >
                    {isHidden ? <FiEye /> : <FiEyeOff />}
                </button>

            </div>

            <div className={`error ${error ? 'show' : ''}`}>{error?.message}</div>

        </div>

    );

};
