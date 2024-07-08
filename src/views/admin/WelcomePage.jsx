import { GalleryVertical, Globe, Pen } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
    const [fullname, setFullname] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/user/profile', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                });
                if (response.ok) {
                    const userInfo = await response.json();
                    setFullname(userInfo.fullname);
                } else {
                    console.error('Error fetching user info:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        fetchProfile();
    }, []);

    return (
        <>
            <div className="overflow-auto p-4 bg-primarygray h-full">
                <div className='container h-10 mx-auto'>
                    <div className="max-w-7xl mx-auto ">
                        <h1 className="text-xl font-normal font-Rubik mt-5">Welcome {fullname} 👋</h1>
                        <div className='bg-white rounded-2xl flex flex-row gap-5 p-5 mt-5'>
                            <Link to={'/create-post'} className='w-1/4 h-40 ring-2 ring-primary rounded-2xl flex flex-col items-center justify-center gap-5 font-Poppins text-xl bg-purple text-primary'>
                                <div className='w-11 h-11'><Pen className='w-full h-full'/></div>
                                <span>Write Post</span>
                            </Link>
                            <Link to={'/create-news'} className='w-1/4 h-40 ring-2 ring-primary rounded-2xl flex flex-col items-center justify-center gap-5 font-Poppins text-xl bg-purple text-primary'>
                                <div className='w-11 h-11'><Globe className='w-full h-full'/></div>
                                <span>Publish News</span>
                            </Link>
                            <Link to={'/create-job'} className='w-1/4 h-40 ring-2 ring-primary rounded-2xl flex flex-col items-center justify-center gap-5 font-Poppins text-xl bg-purple text-primary'>
                                <div className='w-11 h-11'><GalleryVertical className='w-full h-full'/></div>
                                <span>Publish Job</span>
                            </Link>
                            <Link to={'/create-user'} className='w-1/4 h-40 ring-2 ring-primary rounded-2xl flex flex-col items-center justify-center gap-5 font-Poppins text-xl bg-purple text-primary'>
                                <div className='w-11 h-11'><GalleryVertical className='w-full h-full'/></div>
                                <span>Add New User</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WelcomePage;
