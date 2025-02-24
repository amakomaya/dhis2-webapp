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
import List from './Localsupport/List.jsx';
import Newsletter from './Localsupport/Newsletter.jsx';
import SendNewsletter from './Localsupport/SendNewsletter.jsx';
import { AuthProvider } from './Localsupport/AuthContext.jsx';
import ProtectedRoute from './Localsupport/ProtectedRoute.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/account-activation-form', element: <Registration /> },
      { path: '/terms-and-conditions', element: <TermsandCondition /> },
      { path: '/system-use-terms', element: <SystemUseTerms /> },
      { path: '/data-privacy-statement', element: <DataPrivacy /> },
      { path: '/login', element: <Login /> },
      { path: '/local-support', element: <ProtectedRoute element={<LocalSupport />} /> },
      { path: '/list', element: <ProtectedRoute element={<List />} /> },
      { path: '/newsletter', element: <ProtectedRoute element={<Newsletter />} /> },
      { path: '/sendnewsletter', element: <ProtectedRoute element={<SendNewsletter />} /> },


      // { path: '/local-support/edit/:token', element: <ProtectedRoute element={<LocalSupport />} /> }
    ]
  }
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
