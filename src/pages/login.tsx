import Login from '@/components/Login'
import MainLayout from '@/components/MainLayout'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PocketBase from 'pocketbase';
import getConfig from 'next/config';

const LoginPage = () => {

    const router = useRouter();
    const { publicRuntimeConfig } = getConfig();

    useEffect(() => {
        const pb = new PocketBase(publicRuntimeConfig.pocketbase);

        if (pb.authStore.isValid) {
            router.push('/registration');
        }
    }, []);

    return (<MainLayout>
        <Login />
    </MainLayout>)
}

export default LoginPage;