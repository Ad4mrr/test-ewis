import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavBarAdminPanel() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [fullname, setFullname] = useState('');
    const navigate = useNavigate();

    const toggleSidebar = (e) => {
        e.stopPropagation();
        setSidebarOpen(!sidebarOpen);
    };

    const handleClickOutside = (e) => {
        if (
            !document.getElementById('sidebar').contains(e.target) &&
            !document.getElementById('open-sidebar').contains(e.target)
        ) {
            setSidebarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

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

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            });
            if (response.ok) {
                localStorage.removeItem('token');
                navigate('/admin-log');
            } else {
                console.error('Failed to log out');
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <>
            <div
                className={`z-50 absolute bg-primary text-white w-1/4 min-h-screen overflow-y-auto transition-transform transform ease-in-out duration-300 ${
                    sidebarOpen ? '' : '-translate-x-full z-50'
                }`}
                id="sidebar"
            >
                <div className="p-4">
                    <div className="flex flex-row items-center justify-center">
                        <div className="w-1/5">
                            <img
                                src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716163200&semt=sph"
                                alt=""
                                className="w-20 h-20 rounded-full bg-white ring-2 ring-white w-fit h-fit"
                            />
                        </div>
                        <div className="w-4/5 flex flex-col items-start justify-start pl-5 gap-1">
                            <h1 className="text-2xl font-semibold font-Poppins">{fullname}</h1>
                            <h1 className="text-xs font-semibold">admin</h1>
                            <button
                                className="my-2 ring-2 ring-red rounded-xl px-5 py-1 bg-white text-primary text-xs font-Poppins"
                                onClick={handleLogout}
                            >
                                Log Out
                            </button>
                        </div>
                    </div>

                    <div className="font-Poppins text-xl my-10">
                        <div className="my-5">
                            <a href="/dashboard" className="block hover:text-indigo-400 flex items-center">
                                <span className="icon mx-4">📊</span>Dashboard
                            </a>
                        </div>
                        <div className="my-5">
                            <a href="/blog-edit-page" className="block hover:text-indigo-400 flex items-center">
                                <span className="icon mx-4">📝</span>Blogs
                            </a>
                        </div>
                        <div className="my-5">
                            <a href="/show-news" className="block hover:text-indigo-400 flex items-center">
                                <span className="icon mx-4">📰</span>News
                            </a>
                        </div>
                        <div className="my-5">
                            <a href="/show-jobs" className="block hover:text-indigo-400 flex items-center">
                                <span className="icon mx-4">💼</span>Jobs
                            </a>
                        </div>
                        <div className="my-5">
                            <a href="/show-user" className="block hover:text-indigo-400 flex items-center">
                                <span className="icon mx-4">👤</span>Users
                            </a>
                        </div>
                        <div className="my-5">
                            <a href="/media-manager" className="block hover:text-indigo-400 flex items-center">
                                <span className="icon mx-4">🎬</span>Media
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center py-4 px-2">
                        <h1 className="text-2xl font-semibold font-Poppins">Ewis Dashboard</h1>
                        <button
                            className="text-gray-500 hover:text-gray-600 ring-0 rounded-md p-1 ring-blackFooter"
                            id="open-sidebar"
                            onClick={toggleSidebar}
                        >
                            {sidebarOpen ? <X className="" /> : <Menu className="" />}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBarAdminPanel;
