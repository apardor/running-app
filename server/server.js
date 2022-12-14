const express = require('express');
const app = express();
require('dotenv').config();

const nasaKey = process.env.NASA_KEY ;


const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));


app.get("/api/", async (req,res)=>{
  const nasaAPI = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`
  let stravaResponse = await fetch(nasaAPI);
  stravaResponse = await stravaResponse.json();
  res.status(200).json(stravaResponse);
})


app.get("/api/:id", async (req,res)=>{
  const newId = req.params.id
  const iDStravaApi = `https://api.nasa.gov/planetary/apod?date=${newId}&api_key=${nasaKey}`
  let idStravaResponse = await fetch(iDStravaApi);
  idStravaResponse = await idStravaResponse.json();
  res.status(200).json(idStravaResponse);
})

app.listen(5000, ()=> console.log('server started at PORT 5000'));