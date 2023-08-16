const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express()
const API_KEY = "166d00e26d3ff2c6149e89feccc5c59a";

app.get("/", (req, res) => {
    res.send("This is the homepage");
})

app.get('/weather', cors(), async (req, res) => {
    const city = req.query.city || 'Copenhagen';
    try{
        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},dk&appid=${API_KEY}`);
        res.send(weather.data);        
    } catch(err) {
        console.error('Error', err)
        res.status(404).send("Could not fetch weather data");
    }
})

// Catch all route
app.get("*", (req, res) => {
    res.send("I don't know that path!");
})

app.listen(3000, () => console.log("listening on port 3000!"));