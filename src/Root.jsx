import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './Root.css';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet />
        </div>
    );
};

export default Root;