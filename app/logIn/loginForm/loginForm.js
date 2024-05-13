"use client"
import { useState } from "react";
import { authenticate } from "./../../lib/actions";

const LoginForm = () => {
    const [error, setError] = useState('')
    const handleLogin = async (formData) => {
        const data = await authenticate(formData);

        data.error && setError(data.error);
    }
    return (
        <form action={handleLogin}>
            <input type="text" placeholder='username' name='username' required />
            <br />
            <br />
            <br />
            <input type="password" placeholder='password' name='password' required />
            <br />
            <br />
            {
                error && <p>{error}</p>
            }
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;