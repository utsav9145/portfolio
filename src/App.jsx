import React from 'react'
import WebLayout from './layout/WebLayout'
import { Route, Routes } from 'react-router-dom'
import HomePage from './component/HomePage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (<>
    <Routes>
      <Route path="/" element={<WebLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
    <ToastContainer />
  </>)
}

export default App
