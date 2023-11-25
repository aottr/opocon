import MainLayout from '@/components/MainLayout';

const VenuePage = () => {

    return (
        <MainLayout>
            <h1 className='text-3xl'>Venue</h1>
            <div className='flex justify-center'>
                <img src="/static/images/airplane_gif.gif" className='h-32 w-96' />
            </div>
            <h2 className='text-xl'>These are the important locations for OpoCon 2024.</h2>
            <img src='/static/images/map.png' className='w-full' />
            <div className='flex mt-10 items-start'>
                <img src='/static/images/Naturfreundehaus.jpeg' className='w-48' />
                <div className=''>
                    <h2 className='text-xl ml-2'>
                        <img src='/static/images/Marker.png' className='w-10 h-10 inline' />
                        <span className='text-white text-3xl'>1</span>
                        Naturfreundehaus
                    </h2>
                    <p className='px-2'>
                        This is where u gonna sleep and wash yourself.
                    </p>
                    <p className='pt-5 px-2'>
                        Adress: Außer Ort 10, 78532 Tuttlingen
                    </p>
                </div>
            </div>
            <div className='flex mt-10 items-start'>
                <div className=''>
                    <h2 className='text-xl ml-2'>
                        <img src='/static/images/Marker.png' className='w-10 h-10 inline' />
                        <span className='text-white text-3xl'>2</span>
                        Mühlberghütte
                    </h2>
                    <p className='px-2'>
                        This is where the most of the events and party being held.
                    </p>
                    <p className='pt-5 px-2'>
                        Adress: Wildgehege auf dem Mühlberg, 78532 Tuttlingen
                        (Its in the woods. Only allowed to drive up there with special permission!)
                    </p>
                </div>
                <img src='/static/images/Hut.png' className='w-48' />
            </div>
            <div className='flex mt-10 items-start'>
                <img src='/static/images/Zug.gif' className='w-48' />
                <div className=''>
                    <h2 className='text-xl ml-2'>
                        <img src='/static/images/Marker.png' className='w-10 h-10 inline' />
                        <span className='text-white text-3xl'>3</span>
                        Local Trainstation(s)
                    </h2>
                    <p className='px-2'>
                        The Local Trainstation "Rathaus Möhringen" is the closest to the Venue.
                        However, we offer a pick up service at the Trainstations in <span className='font-bold'>Immendingen</span> or <span className='font-bold'>Tuttlingen</span>. Check your connections which suits yourself the best.
                    </p>

                </div>
            </div>
        </MainLayout>
    )
}

export default VenuePage;