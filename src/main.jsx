import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CredencialP5 from './components/CredencialP5';
import Formacion from './components/Formacion';
import { Home } from './components/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/credenciales/:id",
    element: <CredencialP5 />,
  },

]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);