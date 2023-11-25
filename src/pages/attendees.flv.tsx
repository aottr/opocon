import { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';
import MainLayout from '@/components/MainLayout';
import getConfig from 'next/config';

const AttendeesPage = () => {
    const [attendees, setAttendees] = useState<any[]>([]);

    useEffect(() => {
        const fetchAttendees = async () => {
            const pb = new PocketBase(getConfig().publicRuntimeConfig.pocketbase);
            const event = await pb.collection('event').getFirstListItem('');
            const attendees = await pb.collection('event_participation').getFullList({
                filter: `event = "${event.id}"`, expand: 'participant'
            });
            setAttendees(attendees);
        }
        fetchAttendees();

    }, []);
    console.log(attendees)
    return (
        <MainLayout>
            {attendees && attendees.map((attendee: any) => (
                <div key={attendee.id} className='flex m-2 border-2 border-gray-500'>
                    <img className='w-24 h-32 border-2 border-cheese2' src={`${getConfig().publicRuntimeConfig.pocketbase}/api/files/users/${attendee.expand.participant.id}/${attendee.expand.participant.avatar}`} alt="avatar" />
                    <h2 className='text-3xl ml-10'>{attendee.expand.participant.username}</h2>
                    <p></p>
                </div>

            ))}
        </MainLayout>
    )
}

export default AttendeesPage;