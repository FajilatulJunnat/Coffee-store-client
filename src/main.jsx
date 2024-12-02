import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addcoffee from './components/Addcoffee.jsx';
import Updatecoffee from './components/Updatecoffee.jsx';
import Sign_in from './components/Sign_in.jsx';
import Sign_up from './components/Sign_up.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch("http://localhost:5000/coffee")
  },
  {
    path:"add-coffee",
    element:<Addcoffee></Addcoffee>
  },
  {
    path:"update-coffee/:id",
    element:<Updatecoffee></Updatecoffee>,
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
    
  },
  {
    path:"sign-in",
    element:<Sign_in></Sign_in>
  },
  {
    path:"sign-up",
    element:<Sign_up></Sign_up>
  },
  {
    path:"users",
    element:<Users></Users>,
    loader:()=>fetch('http://localhost:5000/users')
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
