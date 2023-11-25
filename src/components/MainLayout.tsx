
import React from 'react';
import PocketBase, { BaseAuthStore } from 'pocketbase';
import { useEffect, useState } from 'react';
import getConfig from 'next/config';

import Sidebar from '@/components/Sidebar';
import Navigation from '@/components/Navigation';

type MainLayoutProps = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
    const [userData, setUserData] = useState<BaseAuthStore | null>(null);
    const { publicRuntimeConfig } = getConfig();

    useEffect(() => {
        const pb = new PocketBase(publicRuntimeConfig.pocketbase);
        pb.authStore.model && setUserData(pb.authStore);
    }, []);

    return (
        <div className='font-serif w-full max-w-[800px]'>
            <header className='h-[220px] flex items-center justify-center'>
                <img src="/static/images/cheese_gif_spinning.gif" className='w-32 h-44 pl-4' />
                <h1 className='text-6xl font-bold text-black'>OpoCon 2024</h1>
                <img src="/static/images/cheese_gif_spinning.gif" className='w-32 h-44 pr-4' />
            </header>
            <Navigation isLoggedIn={userData?.isValid} />
            <div className='grid grid-rows-3 grid-cols-3 gap-2 '>
                <aside className='row-span-3'>
                    <Sidebar isLoggedIn={userData?.isValid} />
                </aside>
                <main className='border border-red-600 col-span-2 row-span-2  bg-orange-500'>
                    {children}
                </main>
                <footer className='col-span-2'>
                    &copy; 2004 OpoCon
                </footer>
            </div>
        </div>
    );
};

export default MainLayout;
