import React, { useState } from 'react';
import NavBarAdminPanel from './NavBarAdminPanel';
import AuthWrapper from './AuthWrapper';

function CreateUser() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const user = {
            username,
            password,
            fullname,
            email
        };
    
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
    
            if (response.ok) {
                const data = await response.json();
                setMessage(`User ${data.username} created successfully!`);
                setUsername('');
                setPassword('');
                setFullname('');
                setEmail('');
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.message}`);
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <>
            <div className=''>
                <NavBarAdminPanel />
                <div className="flex h-screen items-center justify-center p-10 bg-primarysh font-Poppins">
                    <div className="xl:w-1/2 rounded-2xl ring-1 ring-primary md:shadow-xl bg-primarysh py-10">
                        <div className="flex flex-col justify-center items-center p-5 gap-5">
                            <div className="bg-primarygray rounded-full ring-2 ring-primary w-72 h-72 flex items-center justify-center">
                                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/user-security-8980033-7281877.png" alt="" className='w-52 ' />
                            </div>
                            <div className="flex items-center justify-center">
                                <form onSubmit={handleSubmit}>
                                    <h1 className="text-center font-extrabold uppercase text-primary text-2xl">User Create</h1>
                                    <br />
                                    <input
                                        type="text"
                                        className="mb-3 w-full rounded-2xl bg-zinc-100 outline-rose-400 px-5 py-3"
                                        placeholder="full name or name"
                                        value={fullname}
                                        onChange={ev => setFullname(ev.target.value)}
                                    />
                                    <input
                                        type="text"
                                        className="mb-3 w-full rounded-2xl bg-zinc-100 outline-rose-400 px-5 py-3"
                                        placeholder="username"
                                        value={username}
                                        onChange={ev => setUsername(ev.target.value)}
                                    />
                                    <input
                                        type="email"
                                        className="mb-3 w-full rounded-2xl bg-zinc-100 outline-rose-400 px-5 py-3"
                                        placeholder="email"
                                        value={email}
                                        onChange={ev => setEmail(ev.target.value)}
                                    />
                                    <input
                                        type="password"
                                        className="mb-3 w-full rounded-2xl bg-zinc-100 outline-rose-400 px-5 py-3"
                                        placeholder="password"
                                        value={password}
                                        onChange={ev => setPassword(ev.target.value)}
                                    />
                                    <button className="mb-3 w-full rounded-2xl bg-rose-500 px-5 py-3 font-semibold text-white bg-primary">Create User</button>
                                </form>
                            </div>
                            {message && <p className="text-center mt-4">{message}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateUser;
