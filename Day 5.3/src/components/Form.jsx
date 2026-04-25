import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";
import "./Form.css";

const formSchema = z.object({

    username: z
        .string()
        .min(3, "Username should be at least 3 characters")
        .max(20, "Username should not exceed 20 characters"),

    email: z
        .string()
        .email("Please enter a valid email address"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(20, "Password must not exceed 20 characters")
        .regex(/[A-Z]/, "Must contain at least one uppercase letter")
        .regex(/[a-z]/, "Must contain at least one lowercase letter")
        .regex(/[0-9]/, "Must contain at least one number")
        .regex(/[@$!%*?&]/, "Must contain at least one special character (@$!%*?&)"),

    confirm: z
        .string()

}).refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"], // path of error
});

export default function Form() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange",
        resolver: zodResolver(formSchema)
    });

    function submitForm(data) {
        console.log(data);
        reset();
    }

    console.log('form render');

    return (

        <div className="form-container">

            <h2 className="form-heading">Sign Up</h2>

            <form autoComplete="off" onSubmit={handleSubmit(submitForm)}>

                <FormInput
                    label="Username:"
                    id="first"
                    placeholder="Enter Username"
                    register={register('username')}
                    error={errors.username}
                />

                <FormInput
                    label="Email:"
                    id="second"
                    placeholder="Enter Email"
                    autoComplete="nope"
                    register={register('email')}
                    error={errors.email}
                />

                <PasswordInput
                    label="Password:"
                    id="third"
                    placeholder="Enter Password"
                    register={register('password')}
                    error={errors.password}
                />

                <PasswordInput
                    label="Confirm Password:"
                    id="fourth"
                    placeholder="Confirm Password"
                    register={register('confirm')}
                    error={errors.confirm}
                />

                <button className="submit-btn" type="submit">Submit</button>

            </form>

        </div>

    );
}
