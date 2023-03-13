import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MealDetails = () => {
    const mealDetails = useLoaderData();
    const { strDrink, strDrinkThumb } = mealDetails?.drinks[0];
    // console.log(mealDetails?.drinks[0]);
    return (
        <div className='flex flex-col justify-center items-center'>
            <img className='w-72 rounded-lg' src={strDrinkThumb} alt={strDrink} />
            <h1 className='text-2xl font-bold mt-3'>{strDrink}</h1>
        </div>
    );
};

export default MealDetails;