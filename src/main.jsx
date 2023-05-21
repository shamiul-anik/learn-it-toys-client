import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes.jsx';
import { ToastContainer, Zoom } from 'react-toastify';
import AuthProvider from './providers/AuthProvider.jsx';
import 'react-toastify/dist/ReactToastify.css';
import '@smastrom/react-rating/style.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    {/* React Toastify */}
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Zoom}
    />
  </React.StrictMode>,
)
