import React from 'react';
import Header from '../Header/Header';

const NavBar = () => {
    return (
        <nav className='nav-container p-4 mb-10 flex justify-between items-center bg-blue-800 w-full'>
            <h3 className='text-3xl font-bold uppercase text-gray-50'>Meal DB</h3>
            <Header></Header>
        </nav>
    );
};

export default NavBar;