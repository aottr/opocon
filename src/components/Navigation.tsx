import Link from 'next/link';
const Navigation = ({ isLoggedIn }: { isLoggedIn?: boolean }) => {

    const MENU_ITEMS = [
        { label: 'Home', href: '/' },
        { label: 'Venue', href: 'venue.flv' },
        { label: 'Attendees', href: 'attendees.flv', isLoggedInOnly: true },
        { label: 'Registration', href: 'registration', isLoggedInOnly: false },
        { label: 'Contact', href: 'contact.flv' },
       // { label: 'History', href: 'history.php' },
       // { label: 'Guestbook', href: 'guestbook.php', isLoggedInOnly: false },
        { label: 'Charity', href: 'https://charity.opocon.gay' },
        { label: 'Merch', href: 'merch.flv' },
    ];

    const filteredMenuItems = MENU_ITEMS.filter(item => {
        if (item.isLoggedInOnly && !isLoggedIn) {
            return false;
        }
        return true;
    });

    return (
        <nav>
            <ul className="flex flex-col md:flex-row bg-gradient-to-b from-cheese1 via-cheese2 to-cheese3">
                {filteredMenuItems.map((item, index) => (
                    <li key={index} className='px-0 py-4'>
                        <Link href={item.href} className='p-4 hover:bg-gradient-to-b hover:from-cheese3 hover:via-cheese2 hover:to-cheese1'>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
