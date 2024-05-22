import MainLayout from '@/components/MainLayout';
import Link from 'next/link';

const Page = () => {

    return (
        <MainLayout>
            <h1 className='text-3xl'>Our Merch</h1>
            <h2 className='text-2xl my-3'>Get your exclusive T-Shirt for cheese lovers !!1!</h2>
            <div className='flex flex-row justify-center items-center my-2 h-10'>
                <div className='text-2xl mr-2'>
                    high quality screen print !!
                </div>
                <img src="/static/images/amazing.png" alt='amazing' className='h-12 w-10' />
            </div>
            <div className='relative'>
                <img src="/static/images/TShirt_Example2024.png" alt='T-Shirt Design' />
                <img src="/static/images/newSign.png" alt='New Label' className='absolute top-0 left-0 w-1/4' />
                <img src="/static/images/newSign.png" alt='New Label' className='absolute bottom-0 right-0 w-1/4' />
            </div>
            <div className='flex flex-row justify-center my-4'>
                <div className='grow'>
                    <h3 className='text-2xl'>Get it for the low price of just</h3>
                    <div className='text-center'><span className='text-6xl p-2 bg-red-900 text-red-200 inline-block'>~13€</span></div>
                </div>
                <div className='felx-none w-1/3'><img src="/static/images/oponice.webp" alt='Nice' /></div>
            </div>

            <p className='my-3 text-xl'><span className='bg-red-900 text-white'>The T-shirt is already included in the Goodiebag</span> but you can get an additional one if you want for yourself or your friends at home.</p>
            <p className='my-3 text-xl'>You can buy one at OpoCon in the <span className='italic'>ConOps Store</span> or you can <Link className='underline text-blue-700' href="contact.flv">contact Oposum</Link> directly</p>
            <img src="/static/images/mouse_vrc.png" alt='T-Shirt Design' />
        </MainLayout>
    )
}

export default Page;