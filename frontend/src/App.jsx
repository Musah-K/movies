import React from 'react'
import { Outlet } from 'react-router-dom';
import {ToastContainer} from "react-toastify"
import Navigation from './pages/Auth/Navigation'
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <Navigation />
    <ToastContainer />
    <main className='py-3'>
      <Outlet />
    </main>   
    </>
  )
}

export default App