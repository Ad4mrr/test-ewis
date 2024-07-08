import React, { useEffect, useState } from 'react';
import AuthWrapper from './AuthWrapper';
import NavBarAdminPanel from './NavBarAdminPanel';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Edit, Eye, EyeOff, Trash } from 'lucide-react';
import { Link } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [username, setUsername] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/api/user/profile', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then(response => response.json())
            .then(userInfo => {
                setUsername(userInfo.username);
            })
            .catch(error => {
                console.error('Error fetching user info:', error);
            });
    }, []);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/api/user/users', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            });
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                const response = await fetch(`http://localhost:5000/api/user/users/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                });

                if (response.ok) {
                    fetchUsers();
                    toast.success('User deleted successfully!');
                } else {
                    const data = await response.json();
                    toast.error(data.message || 'Failed to delete user');
                }
            } catch (error) {
                console.error('Error deleting user:', error);
                toast.error('Server error. Please try again.');
            }
        }
    };

    const handleSave = async () => {
        try {
            const updatedUser = {
                ...editingUser,
                oldPassword,
                newPassword
            };

            const response = await fetch(`http://localhost:5000/api/user/users/${editingUser._id}`, {
                method: 'PUT',
                body: JSON.stringify(updatedUser),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            });

            const data = await response.json();

            if (response.ok) {
                setEditingUser(null);
                fetchUsers();
                toast.success('User updated successfully!');
            } else {
                toast.error(data.message || 'Failed to update user');
            }
        } catch (error) {
            console.error('Error updating user:', error);
            toast.error('Server error. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditingUser({ ...editingUser, [name]: value });
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleOldPasswordVisibility = () => {
        setOldPasswordVisible(!oldPasswordVisible);
    };

    return (
        <AuthWrapper>
            <NavBarAdminPanel />
            <ToastContainer />
            <div className='w-screen h-screen flex items-center justify-start flex-col bg-primarygray'>
                <h1 className='font-Poppins text-4xl my-5'>Users</h1>
                {editingUser ? (
                    <div className='flex flex-col gap-5 font-Rubik text-base text-blackFooter w-96 bg-white rounded-xl overflow-hidden p-5'>
                        <div className='flex flex-col'>
                            <label htmlFor="username" className='mb-2 font-semibold'>Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={editingUser.username}
                                onChange={handleChange}
                                className='px-5 py-3 rounded-xl font-Rubik ring-1 ring-black'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="fullname" className='mb-2 font-semibold'>Full Name</label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                value={editingUser.fullname}
                                onChange={handleChange}
                                className='px-5 py-3 rounded-xl font-Rubik ring-1 ring-black'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className='mb-2 font-semibold'>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={editingUser.email}
                                onChange={handleChange}
                                className='px-5 py-3 rounded-xl font-Rubik ring-1 ring-black'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="oldPassword" className='mb-2 font-semibold'>Old Password</label>
                            <div className='relative'>
                                <input
                                    type={oldPasswordVisible ? "text" : "password"}
                                    id="oldPassword"
                                    name="oldPassword"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    className='px-5 py-3 rounded-xl font-Rubik w-full ring-1 ring-black'
                                />
                                <button
                                    type="button"
                                    onClick={toggleOldPasswordVisibility}
                                    className='absolute right-3 top-3'
                                >
                                    {oldPasswordVisible ? <EyeOff className='h-6 w-6' /> : <Eye className='h-6 w-6' />}
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="newPassword" className='mb-2 font-semibold'>New Password</label>
                            <div className='relative'>
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    id="newPassword"
                                    name="newPassword"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className='px-5 py-3 rounded-xl font-Rubik w-full ring-1 ring-black'
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className='absolute right-3 top-3'
                                >
                                    {passwordVisible ? <EyeOff className='h-6 w-6' /> : <Eye className='h-6 w-6' />}
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-row gap-5 mt-3'>
                            <button onClick={handleSave} className='px-5 py-3 bg-primary text-white rounded-xl'>Save</button>
                            <button onClick={() => setEditingUser(null)} className='px-5 py-3 bg-red text-white rounded-xl'>Cancel</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className=' w-[1000px] flex flex-row items-center justify-end py-3'>
                            <Link
                                to={'/create-user'}
                                className='bg-primary py-2 px-5 rounded-xl font-Poppins font-bold text-white'
                            >
                                Create User
                            </Link>
                        </div>
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <div className='w-[1000px] bg-white rounded-xl overflow-hidden p-5'>
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gray-100 text-xl font-Poppins text-left">
                                            <th className="px-4 py-2">Username</th>
                                            <th className="px-4 py-2">Full Name</th>
                                            <th className="px-4 py-2">Email</th>
                                            <th className="px-4 py-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map(user => (
                                            <tr key={user._id} className="border-b border-primarysh font-Rubik text-lg text-left">
                                                <td className="px-4 py-2">{user.username}</td>
                                                <td className="px-4 py-2">{user.fullname}</td>
                                                <td className="px-4 py-2">{user.email}</td>
                                                <td className="px-4 py-2">
                                                    <button onClick={() => handleEdit(user)} className="px-4 py-2 bg-primarygray text-white rounded-xl mr-2">
                                                        <Edit />
                                                    </button>
                                                    <button onClick={() => handleDelete(user._id)} className="px-4 py-2 bg-primarygray text-red rounded-xl">
                                                        <Trash />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </>
                )}
            </div>
        </AuthWrapper>
    );
}

export default Users;
