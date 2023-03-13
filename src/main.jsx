import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/Error-page/ErrorPage';
import Home from './components/Home/Home';
import MealDb from './components/MealDb/MealDb';
import MealDetails from './components/MealDetails/MealDetails';
import Restaurant from './components/restaurant/Restaurant';
import './index.css';
import Root from './Root';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element:<Home />
      },
      {
        path: '/restaurant',
        element: <Restaurant />
      },
      {
        path: '/mealdb',
        loader: async()=>{
          return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
        },
        element: <MealDb />
      },
      {
        path:'/mealdb/:mealId',
        loader: async({params})=>{
          // console.log(params.mealId)
          return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.mealId}`);
        },
        element: <MealDetails />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
