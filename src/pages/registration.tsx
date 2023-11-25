import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PocketBase from 'pocketbase';
import getConfig from 'next/config';
import MainLayout from '@/components/MainLayout'

import UserDataComponent from '@/components/registration/UserData';
import AdminAddUserComponent from '@/components/admin/AddUser';


const RegistrationPage = () => {

    const router = useRouter();
    const { publicRuntimeConfig } = getConfig();
    const [isAdmin, setIsAdmin] = useState(false);

    const logout = () => {
        const pb = new PocketBase(publicRuntimeConfig.pocketbase);
        pb.authStore.clear();

        router.push('/');
    }

    useEffect(() => {
        const pb = new PocketBase(publicRuntimeConfig.pocketbase);

        if (!pb.authStore.isValid) {
            router.push('/login');
        }
        if (pb.authStore.model != null && pb.authStore.model.admin) {
            setIsAdmin(true);
        }
    }, []);

    return (<MainLayout>
        <button onClick={logout} className='p-2 bg-red-700 text-white m-1 border-2 border-red-950'>Logout</button>
        {isAdmin && <AdminAddUserComponent />}
        <UserDataComponent />
    </MainLayout>)
}

export default RegistrationPage;