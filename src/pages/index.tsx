import MainLayout from '@/components/MainLayout'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  return (
    <MainLayout>
      <p className='p-2'>
        Welcome to zee Internetseite of <span className='text-xl font-bold'>OpoCon 2024</span>. We are happy you made it to here and we hope you will have zee greatest time at OpoCon.
        We know that our Webside is not zee yellow from zee egg, but we keep improving it with more animated gifs soon.
      </p>
      <div className='flex justify-center'>
        <img src="/static/images/cat_dance_gif.gif" className='h-32 w-64' />
      </div>
      <h2 className='text-2xl'>When?</h2>
      <p className='p-3'>
        OpoCon 2024 is held from <span className='text-xl'>Friday 12th July till Monday 15th July</span>.
      </p>
      <h2 className='text-2xl'>Where?</h2>
      <p className='p-4'>
        Check zee <Link className='underline text-blue-700' href="venue.flv">Venue</Link> tab.
      </p>
      <h2 className='text-2xl'>Who?</h2>
      <p className='p-2'>
        Check zee <Link className='underline text-blue-700' href="attendees.flv">Attendees**</Link> tab.

        You can find more Information on our Discord aswell. Simply join over <Link className='underline text-blue-700' href="contact.flv">zeeContact*</Link> tab.
      </p>
      <h2 className='text-2xl'>How can i join?!</h2>
      <p className='p-2'>
        Only special people with a invite Code can Register. If you think you absolutly desrve to be there, join our Discord for negotiation. No promises however, dont be sad if u cant make it in 2024. OpoCon currently growing and soon will be like NFC or EF or AmuricaCons.
      </p>
      <img src="/static/images/Internet_Party.gif" className='' />
    </MainLayout>
  )
}
