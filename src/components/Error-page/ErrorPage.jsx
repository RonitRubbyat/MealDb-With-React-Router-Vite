import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);
    return (
        <div id='error-page' className='m-m-25%'>
            <h1 className='text-4xl font-bold mx-20 my-4'>Oops!</h1>
            <p>Sorry, an unexpected error has occurred</p>
            <p className='text-gray-400 my-4 mx-20'>
                <i>{error.statusText || error.massage}</i>
            </p>
        </div>
    );
};

export default ErrorPage;