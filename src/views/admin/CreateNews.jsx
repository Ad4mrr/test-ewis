import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import AuthWrapper from './AuthWrapper';
import NavBarAdminPanel from './NavBarAdminPanel';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the Quill styles
import Editor from './Editor';
import { toast, ToastContainer } from 'react-toastify';
function CreateNews() {
    const [newsTitle, setNewsTitle] = useState('');
    const [description, setDescription] = useState('');
    const [source, setSource] = useState('');
    const [files, setFiles] = useState(null);
    const [redirect, setRedirect] = useState(false);

    const createNewNews = async (ev) => {
        ev.preventDefault();
        const data = new FormData();
        data.set('newsTitle', newsTitle);
        data.set('description', description);
        data.set('source', source);
        if (files) {
            data.set('imageFile', files[0]); // Ensure the field name matches
        }
        try {
            const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
            if (!token) {
                console.error('No token found, user might not be authenticated');
                return;
            }
            const response = await fetch('http://localhost:5000/api/news/', {
                method: 'POST',
                body: data,

                headers: {
                   
                    'Authorization': `Bearer ${token}`
                },
                credentials: 'include',
            });

            if (response.ok) {
                toast.success('News created successfully!');
                setRedirect(true);
            } else {
                const errorData = await response.json();
                toast.error(`Error: ${errorData.message}`);
            }


        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (redirect) {
        return <Navigate to={'/dashboard'} />;
    }

    return (
        <>
            <ToastContainer />
            <AuthWrapper>
                <NavBarAdminPanel />
                <div className="w-screen flex flex-col items-center justify-start">
                    <div className="container py-10">
                        <h2 className="text-center font-Poppins font-semibold text-3xl my-5">Create News</h2>
                        <form onSubmit={createNewNews} className="flex flex-col gap-5">
                            <input
                                type="text"
                                value={newsTitle}
                                onChange={ev => setNewsTitle(ev.target.value)}
                                placeholder="News Title"
                                className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
                            />
                            <input
                                type="text"
                                value={source}
                                onChange={ev => setSource(ev.target.value)}
                                placeholder="Source"
                                className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
                            />
                            <input
                                type="file"
                                onChange={ev => setFiles(ev.target.files)}
                                className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
                            />
                            <Editor
                                value={description}
                                onChange={setDescription}
                                className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
                            />
                            <button className="bg-primary px-4 py-2 rounded-lg font-Poppins text-white w-44">Publish News</button>
                        </form>
                    </div>
                </div>
            </AuthWrapper>
        </>
    );
}

export default CreateNews;
