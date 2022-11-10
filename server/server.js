const express = require('express');
const app = express();
require('dotenv').config();

const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));


app.get("/api", async (req,res)=>{
  const stravaApi = 'https://www.strava.com/api/v3/athlete/routes?access_token=873dd510ec8fe0219b3863776113f4e9d7e38d97'
  let stravaResponse = await fetch(stravaApi);
  stravaResponse = await stravaResponse.json();
  res.status(200).json(stravaResponse);
})

app.get("/api/:id", async (req,res)=>{
  console.log(req.params.id)
  const newId = req.params.id
  console.log(newId)
  const iDStravaApi = `https://www.strava.com/api/v3/routes/${newId}?access_token=873dd510ec8fe0219b3863776113f4e9d7e38d97`
  let idStravaResponse = await fetch(iDStravaApi);
  idStravaResponse = await idStravaResponse.json();
  console.log(idStravaResponse.segments[0].state, 'here city')
  ç
  res.status(200).json(idStravaResponse);
})

app.listen(5000, ()=> console.log('server started at PORT 5000'));