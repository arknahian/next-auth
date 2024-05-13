import React from 'react';

const page = () => {
    return (
        <form>
            <input type="text" placeholder="Display Name" name='displayName' required />
            <br />
            <br />
            <input type="text" placeholder="username" name='username' required/>
            <br />
            <br />
            <input type="password" placeholder="password" name='password' required/>
            <br />
            <br />
            <button type="submit">Create Account</button>
        </form>
    );
};

export default page;