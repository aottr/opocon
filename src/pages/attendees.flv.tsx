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

    return (
        <MainLayout>
            {attendees && attendees.map((attendee: any) => (
                <div key={attendee.id} className='flex m-2 border-2 border-gray-500'>
                    <img className='w-24 h-32 border-2 border-cheese2' src={attendee.expand.participant.avatar ? `${getConfig().publicRuntimeConfig.pocketbase}/api/files/users/${attendee.expand.participant.id}/${attendee.expand.participant.avatar}` : `/static/images/dog_dance_2.gif`} alt="avatar" />
                    <div>
                        <h2 className='text-3xl ml-10'>{attendee.expand.participant.username}</h2>
                        <div className='ml-10'>
                            {attendee.expand.participant.species && <div>Species: {attendee.expand.participant.species}</div>}
                            {attendee.expand.participant.gender && <div>Gender: {attendee.expand.participant.gender}</div>}
                            {attendee.expand.participant.fursuiter && <div>I am having Fursuit</div>}
                        </div>
                    </div>
                </div>

            ))}
        </MainLayout>
    )
}

export default AttendeesPage;