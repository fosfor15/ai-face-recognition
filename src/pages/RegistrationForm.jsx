import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/AuthForms.css';


const RegistrationForm = () => {
    const [ isRegister, setRegister ] = useState(false);
    const navigate = useNavigate();

    const register = (event) => {
        event.preventDefault();

        setRegister(true);
        setTimeout(() => {
            navigate('/');
        }, 3e3);
    };

    return (
        <form
            className="registration-form"
            onSubmit={ register }
        >
            <h2>Registration</h2>

            { isRegister
            ? <p>You are registered successfully</p>
            : <>
                <div className="form-control-container">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                    />
                </div>

                <div className="form-control-container">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                    />
                </div>

                <div className="form-control-container">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                    />
                </div>

                <div className="form-control-container">
                    <label htmlFor="repeated-password">Repeat password</label>
                    <input
                        type="password"
                        id="repeated-password"
                    />
                </div>

                <button type="submit">Register</button>
            </> }
        </form>
    );
}

export default RegistrationForm;
