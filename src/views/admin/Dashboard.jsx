import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import BlogsPageAdmin from './BlogsPageAdmin';
import NavBarAdminPanel from './NavBarAdminPanel';
import AuthWrapper from './AuthWrapper';

function Dashboard() {
    

    

    return (
        <>
            <AuthWrapper >
                <div className='h-screen'>

                    <NavBarAdminPanel />
                    <WelcomePage />

                </div>
            </AuthWrapper>
        </>
    );
}

export default Dashboard;
