import { useState, useEffect } from 'react';
import getConfig from 'next/config';
import PocketBase from 'pocketbase';

const UserDataComponent = () => {

    useEffect(() => {
        const retrieveData = async () => {
            try {
                const pb = new PocketBase(getConfig().publicRuntimeConfig.pocketbase);
                if (!pb.authStore.isValid || pb.authStore.model == null) return;
                const user = await pb.collection('users').getOne(pb.authStore.model.id);
                console.log(user);
                setName(user.name);
                setFursuiter(user.fursuiter);
                setSpecies(user.species);
                setGender(user.gender);
                if (user.avatar) {
                    setAvatar(`${getConfig().publicRuntimeConfig.pocketbase}/api/files/users/${user.id}/${user.avatar}`);
                }
            } catch (error) {
                console.log(error);
            }
        }

        retrieveData();
    }, []);

    const uploadAvatar = async (e: any) => {
        try {
            if (avatarUpload == null || avatarUpload.length != 1) return;
            const pb = new PocketBase(getConfig().publicRuntimeConfig.pocketbase);
            if (!pb.authStore.isValid || pb.authStore.model == null) return;
            const formdata = new FormData();
            console.log(avatarUpload[0]);
            formdata.append('avatar', avatarUpload[0]);
            const res = await pb.collection('users').update(pb.authStore.model.id, formdata);
            setSuccess('Avatar uploaded successfully!!');
        } catch (error) {
            console.log(error);
        }
    }

    const saveUserData = async (e: any) => {
        try {
            const pb = new PocketBase(getConfig().publicRuntimeConfig.pocketbase);
            if (!pb.authStore.isValid || pb.authStore.model == null) return;
            const res = await pb.collection('users').update(pb.authStore.model.id, {
                name: name,
                fursuiter: fursuiter,
                species: species,
                gender: gender,
            });
            if (res) {
                setSuccess('Changes saved successfully!!');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const AVAILABLE_SPECIES = ['Human', 'Animal', 'Other'];
    const AVAILABLE_GENDERS = ['Male', 'Female', 'Enby', 'Plant', 'Dog'];

    const [name, setName] = useState('');
    const [fursuiter, setFursuiter] = useState<Boolean>(false);
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');
    const [avatarUpload, setAvatarUpload] = useState<FileList | null>(null);
    const [avatar, setAvatar] = useState<string | null>(null);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    return (
        <div className='p-3'>
            <h1 className='text-2xl'>Edit Registration</h1>
            {
                error && <p className="text-red-500 text-center bg-white p-4 border-2 border-red-600">{error}</p>
            }
            {
                success && <p className="text-green-500 text-center bg-white p-4 border-2 border-green-600">{success}</p>
            }
            {avatar && <img className='w-full h-32 border-2 border-cheese2 my-4' src={avatar} alt="avatar" />}
            <div className="mb-4">
                <label className="block text-red-700 text-sm font-bold mb-2" htmlFor="avatar">
                    Avatar
                </label>
                <input type="file" id="avatar" name="avatar" className='ugly_input' accept="image/png, image/jpeg, image/gif, image/webp" onChange={(file) => setAvatarUpload(file.target.files)} />
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-gradient-to-b from-cheese1 via-cheese2 to-cheese3 border-cheese2 border-2 w-full"
                    type="button"
                    onClick={uploadAvatar}
                >
                    Upload
                </button>
            </div>
            <div className="mb-4">
                <label className="block text-red-700 text-sm font-bold mb-2" htmlFor="name">
                    Sona Name
                </label>
                <input
                    className="ugly_input"
                    id="name"
                    type="text"
                    placeholder="Sona Name"
                    value={name} onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-red-700 text-sm font-bold mb-2" htmlFor="species">
                    Species
                </label>
                <select name="species" className='ugly_input' value={species} onChange={(value) => setSpecies(value.target.value)}>
                    <option value="">--Please choose your species--</option>
                    {AVAILABLE_SPECIES.map(species => (
                        <option key={species} value={species}>{species}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-red-700 text-sm font-bold mb-2" htmlFor="gender">
                    I identify myself as
                </label>
                <select name="gender" className='ugly_input' value={gender} onChange={(value) => setGender(value.target.value)}>
                    <option value="">--Please choose your sexual identity--</option>
                    {AVAILABLE_GENDERS.map(gender => (
                        <option key={gender} value={gender}>{gender}</option>
                    ))}
                </select>
            </div>
            <fieldset className='mb-4'>
                <legend className='block text-red-700 text-sm font-bold mb-2'>Choose additional info:</legend>

                <div>
                    <input type="checkbox" id="fursuit" name="fursuit" checked={fursuiter == true} onChange={() => setFursuiter(!fursuiter)} />
                    <label htmlFor="fursuit" className='ml-4'>I come with fursuit</label>
                </div>
            </fieldset>
            <div className="flex items-center justify-between">
                <button
                    className="bg-gradient-to-b from-cheese1 via-cheese2 to-cheese3 border-cheese2 border-2 w-full"
                    type="button"
                    onClick={saveUserData}
                >
                    Save
                </button>
            </div>
        </div>
    )
}
export default UserDataComponent;