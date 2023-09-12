import express, { Application, Request, Response } from "express";
import axios from "axios";
import cors from "cors";

const API_KEY: string = "56f7e7fb66556ac07611d68de8a4a6c3";
const app: Application = express();

app.get("/", (req: Request, res: Response): void => {
    res.send("This is the homepage");
});

app.get('/weather', cors(), async (req: Request, res: Response): Promise<void> => {
    const city: string = (req.query.city as string) || 'Copenhagen';
    try {
        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},dk&appid=${API_KEY}`);
        const weatherData = weather.data; 
        res.send(weatherData);   
        // res.render('index', {weatherData});    
    } catch(err) {
        console.error('Error', err)
        res.status(404).send("Could not fetch weather data");
    }
});

// Add a post request for the submit of a city in the ejs form to render a new city

app.get("*", (req: Request, res: Response): void => {
    res.send("I don't know that path!");
});

app.listen(3000, (): void => {
    console.log("listening on port 3000!");
});