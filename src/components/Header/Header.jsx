import React, { useState } from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='navList relative'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 text-white sm:hidden'>
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>
            <div className={`absolute sm:static bg-blue-800 flex flex-col justify-center items-center sm:block right-0 duration-500 ${open ? 'top-8' : 'top-[-200px]'}`}>
                <NavLink to={`/`}>Home</NavLink>
                <NavLink to={`/restaurant`}>Restaurant</NavLink>
            </div>
        </div>
    );
};

export default Header;