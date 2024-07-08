import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [suces, setsuces] = useState(false)
    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/user/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(data.message);
                toast.success(data.message);
                setsuces(true)
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
                            alt=""
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <form onSubmit={handleForgotPassword}>
                            <h1 className="text-center font-extrabold uppercase text-primary text-2xl">
                                Forgot Password
                            </h1>
                            <br />
                            <input
                                type="email"
                                className="mb-3 w-full rounded-2xl bg-zinc-100 outline-rose-400 px-5 py-3"
                                placeholder="Email"
                                value={email}
                                onChange={(ev) => setEmail(ev.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="mb-3 w-full rounded-2xl bg-rose-500 px-5 py-3 font-semibold text-white bg-primary"
                            >
                                Send Reset Link
                            </button>
                        </form>
                    </div>
                   { suces && <Link to={'/admin-log'}>Log In</Link>}
                    {message && <p className="text-center  text-red font-Poppins bg-white border-l-2 px-3">{message}</p>}
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
