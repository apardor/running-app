import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Today from './Today';
import Past from './Past';



const App = () => {

  return (
    <div>
      <Routes>
        <Route path={`/api`} element={<Today/>}/>
        <Route path={`/api/:id`} element={<Past/>}/>
      </Routes>
    </div>
  )
}
export default App


