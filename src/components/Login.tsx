
import React from "react";
import Marquee from 'react-fast-marquee';
import { useRouter } from 'next/router';
import { useState } from 'react';
import PocketBase from 'pocketbase';
import getConfig from 'next/config';


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const handleLogin = async (e: any) => {

        e.preventDefault();

        try {

            const pb = new PocketBase(getConfig().publicRuntimeConfig.pocketbase);
            const user = await pb.collection('users').authWithPassword(username, password);

            router.push('/registration');
        } catch (error) {
            setError('Seems like you are not invited. Please leave.');
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <Marquee speed={30}>
                Login to get the full experience of OpoCon 2024
            </Marquee>
            {
                error && <p className="text-red-500 text-center bg-white p-4 border-2 border-red-600">{error}</p>
            }
            <div className="w-full max-w-md">
                <form className="px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-red-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="ugly_input"
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={username} onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-red-700 text-sm font-bold mb-2" htmlFor="password">
                            Password / Invitecode
                        </label>
                        <input
                            className="ugly_input"
                            id="password"
                            type="password"
                            placeholder="******************"
                            value={password} onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-gradient-to-b from-cheese1 via-cheese2 to-cheese3 border-cheese2 border-2 p-4"
                            type="button"
                            onClick={handleLogin}
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
