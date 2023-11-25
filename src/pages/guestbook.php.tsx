import MainLayout from '@/components/MainLayout';

const GuestbookPage = () => {

    return (
        <MainLayout>
            <h1 className='text-3xl'>Welcome to our Guestbook! Please leave 1 entry</h1>
            <p className='p-2 overflow-visible'>
                <b>Fatal error:</b> Possible integer overflow in memory allocation (2 * 42069 + 32) in <b>D:\xampp\htdocs\opocon\Neuer Ordner 3\includes\MyMegaGuestbook.php</b> on line <b>227</b>
            </p>
        </MainLayout>
    )
}

export default GuestbookPage;