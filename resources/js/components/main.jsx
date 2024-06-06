import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './home/Home.jsx';
import Registration from './Registration/Registration.jsx';
import TermsandCondition from './home/TermsandCondition.jsx';
import SystemUseTerms from './home/SystemUseTerms.jsx';
import DataPrivacy from './home/DataPrivacy.jsx';
import Login from './home/Login.jsx';
import LocalSupport from './Localsupport/Create.jsx';

import axios from 'axios';

axios.interceptors.request.use(
  config => {
      const token = localStorage.getItem('token');
      console.log('token',token);
      if (token) {
          config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
  },
  error => {
      return Promise.reject(error);
  }
);

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/account-activation-form', element: <Registration /> },
      { path: '/terms-and-conditions', element: <TermsandCondition /> },
      { path: '/system-use-terms', element: <SystemUseTerms/> },
      { path: '/data-privacy-statement', element: <DataPrivacy/> },
      { path: '/login', element: <Login/> },
      { path: '/local-support', element:<LocalSupport /> }
    ]
  }
];

// Create the BrowserRouter instance
const router = createBrowserRouter(routes);

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
  </React.StrictMode>
);