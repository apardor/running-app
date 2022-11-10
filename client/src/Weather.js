import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const Weather = () => {

  const [ weather, setWeather ] = useState([]);
  
  
  const {id} = useParams();
  useEffect(()=>{  
    const stravaId = () => {
    fetch(`/api/${id}`,{
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }}
    )
    .then(res=>res.json())
    .then((data)=>setWeather(data)) 
    } 
    stravaId();
},[])



  return (
    <div>
      { weather }
    </div>
  )
}

export default Weather