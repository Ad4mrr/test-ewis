import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminLog() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [message, setMessage] = useState('');

    const login = async (e) => {
        e.preventDefault();

        const credentials = {
            username,
            password,
        };

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                toast.success('Login successful!');
                setRedirect(true);
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.message}`);
                toast.error(`Error: ${errorData.message}`);
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
            toast.error(`Error: ${error.message}`);
        }
    };

    if (redirect) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div className="flex h-screen items-center justify-center p-10 bg-primarysh font-Poppins">
            <ToastContainer />
            <div className="xl:w-1/2 rounded-2xl ring-1 ring-primary md:shadow-xl bg-primarysh py-10">
                <div className="flex flex-col justify-center items-center p-5 gap-5">
                    <div className="bg-primarygray rounded-full ring-2 ring-primary w-72 h-72">
                        <img
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/successfully-login-8196880-6559357.png?f=webp"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <form onSubmit={login} className=''>
                            <h1 className="text-center font-extrabold uppercase text-primary text-2xl">
                                User login
                            </h1>
                            <br />
                            <input
                                type="text"
                                className="mb-3 w-full rounded-2xl bg-zinc-100 outline-rose-400 px-5 py-3"
                                placeholder="Username"
                                value={username}
                                onChange={(ev) => setUsername(ev.target.value)}
                            />
                            <input
                                type="password"
                                className="mb-3 w-full rounded-2xl bg-zinc-100 outline-rose-400 px-5 py-3"
                                placeholder="Password"
                                value={password}
                                onChange={(ev) => setPassword(ev.target.value)}
                            />
                            <button
                                type="submit"
                                className="mb-3 w-full rounded-2xl bg-rose-500 px-5 py-3 font-semibold text-white bg-primary"
                            >
                                Login
                            </button>

                        </form>
                        <Link to={'/forgot-password'} className='text-center'>Forget password</Link>
                    </div>
                    {message && <p className="text-center mt-4 text-red-500">{message}</p>}
                </div>
            </div>
        </div>
    );
}

export default AdminLog;
