import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import AuthWrapper from './AuthWrapper';
import NavBarAdminPanel from './NavBarAdminPanel';
import Editor from './Editor'; // Import the enhanced Editor
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState(null);
    const [redirect, setRedirect] = useState(false);

    const createNewPost = async (ev) => {
        ev.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        if (files) {
            data.set('file', files[0]);
        }

        try {
            const token = localStorage.getItem('token'); // Retrieve token from localStorage
            if (!token) {
                console.error('No token found, user might not be authenticated');
                return;
            }

            const response = await fetch('http://localhost:5000/api/blogs/', {
                method: 'POST',
                body: data,
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                credentials: 'include', // Ensure credentials are included if your server requires authentication
            });

            if (response.ok) {
                const post = await response.json();
                setRedirect(`/blog-edit-page`);
            } else {
                const errorData = await response.json();
                console.error('Failed to create post:', errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (redirect) {
        return <Navigate to={redirect} />;
    }

    return (
        <>
        {/* <AuthWrapper> */}
                <NavBarAdminPanel />
                <ToastContainer />
                <div className="w-screen flex flex-col items-center justify-start z-10">
                    <div className="container py-10">
                        <h2 className="text-center font-Poppins font-semibold text-3xl my-5">
                            Create your post here
                        </h2>
                        <form onSubmit={createNewPost} className="flex flex-col gap-5 z-10">
                            <input
                                type="text"
                                value={title}
                                onChange={(ev) => setTitle(ev.target.value)}
                                placeholder="Title"
                                className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
                            />
                            <input
                                type="text"
                                value={summary}
                                onChange={(ev) => setSummary(ev.target.value)}
                                placeholder="Summary"
                                className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
                            />
                            <input
                                type="file"
                                onChange={(ev) => setFiles(ev.target.files)}
                                className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
                            />
                            <Editor value={content} onChange={setContent} />
                            <p className='font-Poppins text-base text-red italic'>NOTE: Image Size should be maximim 10mb </p>
                            <button className="bg-primary px-4 py-2 rounded-lg font-Poppins text-white w-44">
                                Publish Post
                            </button>
                        </form>
                    </div>
                </div>
         {/* </AuthWrapper> */}
        </>
    );
};

export default CreatePost;
