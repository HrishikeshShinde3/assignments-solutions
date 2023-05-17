import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './atoms/pages/pages/Home/Home';
import Aboutus from './about-us/aboutus';
import Register from './atoms/pages/pages/register/Register';
import Login from './login-main/login'
import Contactus from './atoms/pages/pages/contact-us/Contact-us';




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  // http://localhost:3001/ -/>  "/"
  {
    path: "/",
    element: <App/>
  },
   //  ====>  /Home'
   {
    path : '/Home' ,
    element : <Home/>
  },

  //  ====>  /Aboutus'
  {
    path : '/Aboutus' ,
    element : <Aboutus/>
  },

  //  ====>  /register'
  {
    path : '/register' ,
    element : <Register/>
  },

  {
    path : '/login' ,
    element : <Login/>
  },

  


  


 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
