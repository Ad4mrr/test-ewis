import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function AuthWrapper({ children }) {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/user/profile', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                });
                if (response.ok) {
                    const userInfo = await response.json();
                    if (userInfo.username) {
                        setIsAuthenticated(true);
                    } else {
                        setIsAuthenticated(false);
                    }
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error('Error fetching profile:', error);
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (loading) {
        return (
            <div className='w-screen h-screen flex flex-col items-center justify-center font-Poppins text-2xl bg-primary text-white'>
                <span>Loading...</span>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/admin-log" />;
    }

    return children;
}

export default AuthWrapper;
