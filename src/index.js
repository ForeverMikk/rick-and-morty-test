import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Characters from './components/Characters/Characters';
import Episodes from './components/Episodes/Episodes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/characters',
    element: <Characters />
  },
  {
    path: '/episodes',
    element: <Episodes/>
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
      {/* <App /> */}
    {/* </RouterProvider> */}
  </React.StrictMode>
);

