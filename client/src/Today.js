import React, { useState, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from './Input';


const Today = () => {

  const [ backendData, setBackendData ]= useState([]);
  const [output, setOutput] = useState();
  const navigate = useNavigate();


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
console.log(planet.date, 'here is planet');

  return (
<main className='main__gallery'>
  <div className='main__right' style={{ 
    backgroundImage: `url(${planet.url})`,
    backgroundRepeat: `no-repeat`,
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

export default Today


