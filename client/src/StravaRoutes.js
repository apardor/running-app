import React, { useState, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom'

const StravaRoutes = () => {

  const [ backendData, setBackendData ]= useState([{}]);
  const [ route, setRoute ]= useState({});
  const navigate = useNavigate();

  useEffect(()=>{
    fetch('/api')
      .then(res=>res.json())
      .then((data)=>setBackendData(data)) 
  },[])

  const selectedRoute = (evt) => {
    const route = backendData[evt.target.value];
    setRoute(route.id);
    navigate(`/api/${route.id}`);
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



