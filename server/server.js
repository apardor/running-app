const express = require('express');
const app = express();
require('dotenv').config();

const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));


app.get("/api", async (req,res)=>{
  const stravaApi = 'https://www.strava.com/api/v3/athlete/routes?access_token=ef232dd3f04111e347ab6f05227e1f5f0e7db248'
  let stravaResponse = await fetch(stravaApi);
  stravaResponse = await stravaResponse.json();
  console.log(stravaResponse, 'here is response from Strava server');
  res.status(200).json(stravaResponse);
})

app.listen(5000, ()=> console.log('server started at PORT 5000'));