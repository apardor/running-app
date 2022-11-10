import React, { useState, useEffect } from 'react'

const StravaRoutes = () => {

  const [ backendData, setBackendData ]= useState([{}]);
  const [ route, setRoute ]= useState({});

  useEffect(()=>{
    fetch('/api')
      .then(res=>res.json())
      .then((data)=>setBackendData(data)) 
  },[])

  const selectedRoute = (evt) => {
    const route = backendData[evt.target.value]
    setRoute(route)
  }



  return (
    <div>
      {(typeof backendData === "undefined") ? (
            <p>Loading...</p>
          ) : ( 
            <form>
            <select onChange={selectedRoute}>
              { backendData.map((el, i) =>
                <option value={i} key={i}> {el.name} </option> )}
            </select>
          </form> )
      }
      { JSON.stringify(route) }
    </div>
  )
}

export default StravaRoutes



