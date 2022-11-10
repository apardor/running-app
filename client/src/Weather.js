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
    .then(data => console.log(data, 'here is data from fetch'))
    } 
    stravaId();
},[])

console.log(weather.segments, 'here is athlete');

  return (
    <div>
      { weather.segments }
    </div>
  )
}

export default Weather