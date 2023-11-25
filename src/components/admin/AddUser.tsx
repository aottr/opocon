import { useState, useEffect } from 'react';
import getConfig from 'next/config';
import PocketBase from 'pocketbase';

const AdminAddUserComponent = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const addNewUser = async (e: any) => {
        try {
            const pb = new PocketBase(getConfig().publicRuntimeConfig.pocketbase);
            if (!pb.authStore.isValid || pb.authStore.model == null) return;

            const event = await pb.collection('event').getFirstListItem('');
            const res = await pb.collection('users').create({
                username,
                password,
                passwordConfirm: password,
            });
            if (res) {
                setSuccess('User created successfully!!');
                pb.collection('event_participation').create({
                    event: event.id,
                    participant: res.id,
                });
            }

        } catch (error) {
            setError('Ooopsie! Something went wrong!');
            console.log(error);
        }
    }

    return (
        <div className='p-3'>
            <h1 className='text-2xl'>Admin</h1>
            {
                error && <p className="text-red-500 text-center bg-white p-4 border-2 border-red-600">{error}</p>
            }
            {
                success && <p className="text-green-500 text-center bg-white p-4 border-2 border-green-600">{success}</p>
            }
            <div className="mb-4">
                <label className="block text-red-700 text-sm font-bold mb-2" htmlFor="name">
                    Username (for login)
                </label>
                <input
                    className="ugly_input"
                    id="name"
                    type="text"
                    placeholder="Username"
                    onChange={e => setUsername(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-red-700 text-sm font-bold mb-2" htmlFor="name">
                    Password / Invite Code
                </label>
                <input
                    className="ugly_input"
                    id="name"
                    type="text"
                    placeholder="Enter invite code"
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-gradient-to-b from-cheese1 via-cheese2 to-cheese3 border-cheese2 border-2 w-full"
                    type="button"
                    onClick={addNewUser}
                >
                    Invite new User
                </button>
            </div>
        </div>
    )
}
export default AdminAddUserComponent;