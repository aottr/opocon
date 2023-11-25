import { useState, useEffect } from 'react';
import getConfig from 'next/config';
import PocketBase from 'pocketbase';
import { useRouter } from 'next/navigation';
const PasswordChangeComponent = () => {

    const router = useRouter();

    const updatePassword = async (e: any) => {
        try {
            const pb = new PocketBase(getConfig().publicRuntimeConfig.pocketbase);
            if (!pb.authStore.isValid || pb.authStore.model == null) return;
            const res = await pb.collection('users').update(pb.authStore.model.id, {
                password,
                oldPassword,
                passwordConfirm
            });
            if (res) {
                setSuccess('Changes saved successfully!!');
                pb.authStore.clear();
                router.push('/login');
            }
        } catch (error) {
            setError('Ooopsie! Something went wrong! Please check your credentials and try again.');
            console.log(error);
        }
    }

    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [oldPassword, setOldPassword] = useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    return (
        <div className='p-3'>
            <h1 className='text-2xl'>Change Password</h1>
            {
                error && <p className="text-red-500 text-center bg-white p-4 border-2 border-red-600">{error}</p>
            }
            {
                success && <p className="text-green-500 text-center bg-white p-4 border-2 border-green-600">{success}</p>
            }

            <div className="mb-4">
                <label className="block text-red-700 text-sm font-bold mb-2" htmlFor="name">
                    New Password
                </label>
                <input
                    className="ugly_input"
                    id="password"
                    type="password"
                    placeholder="******************"
                    minLength={8}
                    maxLength={70}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-red-700 text-sm font-bold mb-2" htmlFor="name">
                    Confirm new password
                </label>
                <input
                    className="ugly_input"
                    id="password"
                    type="password"
                    placeholder="******************"
                    minLength={8}
                    maxLength={70}
                    onChange={e => setPasswordConfirm(e.target.value)}
                />
            </div>
            <div className="mb-4 mt-10">
                <label className="block text-red-700 text-sm font-bold mb-2" htmlFor="name">
                    Current password
                </label>
                <input
                    className="ugly_input"
                    id="password"
                    type="password"
                    placeholder="******************"
                    minLength={8}
                    maxLength={70}
                    onChange={e => setOldPassword(e.target.value)}
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-gradient-to-b from-cheese1 via-cheese2 to-cheese3 border-cheese2 border-2 w-full"
                    type="button"
                    onClick={updatePassword}
                >
                    Update Password
                </button>
            </div>
        </div>
    )
}
export default PasswordChangeComponent;