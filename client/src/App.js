import React, { useState, useEffect } from 'react'
import './App.css';



const App = () => {

  const [ backendData, setBackendData ]= useState([{}]);

  useEffect(()=>{
    fetch('/api')
      .then(res=>res.json())
      .then((data)=>setBackendData(data)) 
  },[])

  return (
    <div>
     {(typeof backendData.users === "undefined") ? (
      <p>Loading...</p>
     ) : (
      backendData.users.map((user,i) => (
        <p key={i}> {user} </p>
      )
     ))}
    </div>
  )
}

export default App


