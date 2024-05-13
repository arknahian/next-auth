import React from 'react';
import { auth, signOut } from '../auth';

const page = async () => {
    const {user} = await auth();
    return (
        <div>
            <h1>This is dashboard</h1>

            <p>Your name: {user.displayName}</p>
            <p>Email: {user.email}</p>
            <p>username: @{user.username}</p>

            <form action={async () => {
                "use server"
                await signOut()
            }}>
                <button>Logout</button>
            </form>
        </div>
    );
};

export default page;