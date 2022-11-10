import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import StravaRoutes from './StravaRoutes';
import Weather from './Weather';



const App = () => {

  return (
    <div>
      <Routes>
        <Route path={`/api`} element={<StravaRoutes/>}/>
        <Route path={`/api/:id`} element={<Weather/>}/>
      </Routes>
    </div>
  )
}
export default App


