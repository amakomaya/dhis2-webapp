import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './home/Home.jsx';
import Registration from './Registration/Registration.jsx';
import TermsandCondition from './home/TermsandCondition.jsx';
import SystemUseTerms from './home/SystemUseTerms.jsx';
import DataPrivacy from './home/DataPrivacy.jsx';



// Define your routes
const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/account-activation-form', element: <Registration /> },
      { path: '/terms-and-conditions', element: <TermsandCondition /> },
      { path: '/system-use-terms', element: <SystemUseTerms/> },
      { path: '/data-privacy-statement', element: <DataPrivacy/> }


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


