import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Input from './Input';

const Past = () => {

  const [ backendData, setBackendData ]= useState([]);
  const [output, setOutput] = useState();
  const navigate = useNavigate();
  
  
  const {id} = useParams();
  useEffect(()=>{  
    const planetId = () => {
    fetch(`/api/${id}`,{
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }}
    )
    .then(res=>res.json())
    .then((data)=>setBackendData(data)) 
    } 
    planetId();
},[])

const handleClick = (e) => {
  navigate(`/api/${output}`);
}

const planet = backendData;
console.log(planet.date, 'here is planet');

  return (
<main className='main__gallery'>
  <div className='main__right' style={{ 
    backgroundImage: `url(${planet.url})`,
  }}>
    <div className='section__right'>
  <h1>Nasa gallery</h1>
  <h2 className='title__planet'> {planet.title} </h2>
  <article className='article__planet'> {planet.explanation} </article>
  <Input handleClick={handleClick} searchvalue={setOutput}/>
  </div>
  </div>
  <div className='main__left'>
  <img className='img__planet' src={ planet.url } /> 
  </div>
</main>  
  )
}

export default Past