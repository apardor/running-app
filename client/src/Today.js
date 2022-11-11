import React, { useState, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from './Input';


const Today = () => {

  const [ backendData, setBackendData ]= useState([]);
  const [output, setOutput] = useState();
  const navigate = useNavigate();

  console.log(backendData, 'here is backend data');

  useEffect(()=>{
    fetch('/api')
      .then(res=>res.json())
      .then((data)=>setBackendData(data)) 
  },[])


const handleClick = (e) => {
    e.preventDefault();
    navigate(`/api/${output}`);
  }
 
const planet = backendData;

  return (
    (backendData.length === 0) ? (
<div className="loading">Loading...</div>

    ) : (
<main className='main__gallery'>
  <div className='main__right' style={{ 
    backgroundImage: `url(${planet.url})`,
    backgroundRepeat: `no-repeat`,
  }}>
    
    <h1>Nasa picture of the day</h1>
    <div className='section__right'>
    <Input handleClick={handleClick} searchvalue={setOutput}/>    
  <h2 className='title__planet'> {planet.title} </h2>
  <h3>{planet.date} </h3>
  <article className='article__planet'> {planet.explanation} </article>
  
  </div>
  </div>
  <div className='main__left'>
  <img className='img__planet' src={ planet.url } /> 
  </div>
</main>  
    )
  )
}

export default Today



