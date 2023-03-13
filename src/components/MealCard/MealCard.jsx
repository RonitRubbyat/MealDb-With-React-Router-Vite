import React from 'react';
import { useNavigate } from 'react-router-dom';

const MealCard = ({ drink }) => {
    const { strDrink, strDrinkThumb, strInstructions, idDrink } = drink;

    const navigate = useNavigate();
    const handelMealDetails = ()=>{
        navigate(`/mealdb/${idDrink}`)
    }
    return (
        <div className='border-solid border-2 border-gray-300 rounded-t-lg relative flex flex-col justify-between items-center'>
            <div>
                <img className='max-w-72 max-h-72 rounded-t-lg' src={strDrinkThumb} alt={strDrink} />
                <div className='my-4 px-3'>
                    <h2 className='text-2xl font-bold'>{strDrink}</h2>
                    <p>{strInstructions.slice(0, 100)}</p>
                </div>
            </div>
            <button onClick={()=> handelMealDetails()} className='w-full font-bold bg-blue-800 text-white'>Details</button>
        </div>
    );
};

export default MealCard;