import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MealCard from '../MealCard/MealCard';

const MealDb = () => {
    const cocktails = useLoaderData();
    // console.log(cocktails.drinks);
    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-3xl font-bold mb-10'>Meal DB</h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 m-5'>
                {
                    cocktails.drinks.map(drink => <MealCard
                        key={drink.idDrink}
                        drink={drink}
                    />)
                }
            </div>
        </div>
    );
};

export default MealDb;