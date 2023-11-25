import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PocketBase, { AuthModel } from 'pocketbase';
import getConfig from 'next/config';
import MainLayout from '@/components/MainLayout'

import UserDataComponent from '@/components/registration/UserData';
import AdminAddUserComponent from '@/components/admin/AddUser';
import PasswordChangeComponent from '@/components/registration/PasswordChange';


const RegistrationPage = () => {

    const router = useRouter();
    const { publicRuntimeConfig } = getConfig();
    const [isAdmin, setIsAdmin] = useState(false);
    const [user, setUser] = useState<AuthModel | null>(null);

    const logout = () => {
        const pb = new PocketBase(publicRuntimeConfig.pocketbase);
        pb.authStore.clear();

        router.push('/');
    }

    useEffect(() => {
        const pb = new PocketBase(publicRuntimeConfig.pocketbase);

        if (!pb.authStore.isValid) {
            router.push('/login');
        } else {
            setUser(pb.authStore.model);
        }

        if (pb.authStore.model != null && pb.authStore.model.admin) {
            setIsAdmin(true);
        }
    }, []);

    return (<MainLayout>
        {user && (
            <>
                <button onClick={logout} className='p-2 bg-red-700 text-white m-1 border-2 border-red-950'>Logout</button>
                {isAdmin && <AdminAddUserComponent />}
                <UserDataComponent />
                <PasswordChangeComponent />
            </>
        )}
    </MainLayout>)
}

export default RegistrationPage;