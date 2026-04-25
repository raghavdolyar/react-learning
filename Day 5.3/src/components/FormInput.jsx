import './FormInput.css';

export default function FormInput({ label, id, register, error, type = "text", ...rest }) {

    return (

        <div className="box">

            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} {...register} {...rest} />
            <div className={`error ${error ? 'show' : ''}`}>{error?.message}</div>

        </div>

    );
};
