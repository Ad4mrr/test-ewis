import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword() {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [suces, setsuces] = useState(false)
    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            toast.error('Passwords do not match');
            return;
        }
        try {
            const response = await fetch(`http://localhost:5000/api/user/reset-password/${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password })
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(data.message);
                toast.success(data.message);
                setsuces(true)
                setPassword('')
                setConfirmPassword('')
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

    return (
        <div className="flex h-screen items-center justify-center p-10 bg-primarysh font-Poppins">
            <ToastContainer />
            <div className="xl:w-1/2 rounded-2xl ring-1 ring-primary md:shadow-xl bg-primarysh py-10">
                <div className="flex flex-col justify-center items-center p-5 gap-5">
                    <div className="bg-primarygray rounded-full ring-2 ring-primary w-72 h-72">
                        <img
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/forgot-password-8196882-6559358.png"
                            alt="Reset Password"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <form onSubmit={handleResetPassword}>
                            <h1 className="text-center font-extrabold uppercase text-primary text-2xl">
                                Reset Password
                            </h1>
                            <br />
                            <input
                                type="password"
                                className="mb-3 w-full rounded-2xl bg-zinc-100 outline-rose-400 px-5 py-3"
                                placeholder="New Password"
                                value={password}
                                onChange={(ev) => setPassword(ev.target.value)}
                                required
                            />
                            <input
                                type="password"
                                className="mb-3 w-full rounded-2xl bg-zinc-100 outline-rose-400 px-5 py-3"
                                placeholder="Confirm New Password"
                                value={confirmPassword}
                                onChange={(ev) => setConfirmPassword(ev.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="mb-3 w-full rounded-2xl bg-rose-500 px-5 py-3 font-semibold text-white bg-primary"
                            >
                                Reset Password
                            </button>
                        </form>
                    </div>
                    { suces && <Link to={'/admin-log'} className='bg-white px-24 py-3 rounded-xl'>Log In</Link>}
                    {message && <p className="text-center mt-4 text-red-500">{message}</p>}
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
