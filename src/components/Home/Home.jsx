import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handelMenu = ()=>{
        navigate('/mealdb')
    }
    return (
        <div className='text-center'>
            <h1 className='text-3xl font-bold  mb-10'>Welcome to Meal DB</h1>
            <button onClick={()=>handelMenu()} className='bg-blue-800 text-white px-8 py-1 text-2xl rounded-md uppercase underline hover:bg-orange-500'>Menu</button>
        </div>
    );
};

export default Home;