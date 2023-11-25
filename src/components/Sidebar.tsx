import Link from 'next/link';

const Sidebar = ({ isLoggedIn }: { isLoggedIn?: boolean }) => {

    const MENU_ITEMS = [
        { label: 'Home', href: '/' },
        { label: 'Venue', href: 'venue.flv' },
        { label: 'Attendees', href: 'attendees.flv' },
        { label: 'Registration', href: 'registration' },
        { label: 'Contact', href: 'contact.flv' },
        { label: 'History', href: 'history.php' },
        { label: 'Guestbook', href: 'guestbook.php' },
    ]

    return (
        <div className='w-64 sticky top-2'><ul className='list-inside list-disc bg-gradient-to-r from-orange-500 to-orange-200 border-2 border-gray-400'>
            {MENU_ITEMS.map((item, index) => (
                <li key={index} className='hover:bg-orange-500'>
                    <Link href={item.href}>
                        {item.label}
                    </Link>
                </li>
            )
            )}
        </ul>
            <img src="/static/images/eevee_dance_gif.gif" className='w-64 h-32' />

        </div>
    )
}
export default Sidebar;