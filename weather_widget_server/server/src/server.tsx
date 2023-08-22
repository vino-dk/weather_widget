import express, { Application, Request, Response } from "express";
import axios from "axios";
import cors from "cors";
import { renderToString } from 'react-dom/server'
import App from '../../client/src/App'
import React from "react";

const API_KEY: string = "166d00e26d3ff2c6149e89feccc5c59a";
const app: Application = express();


app.get("/", (req: Request, res: Response): void => {
    const app = renderToString(<App />)
    res.send(`<html>
        <body>
            <div id="root">${app}</div>
        </body>
    </html>`);
    // res.send(app);
});

app.get('/weather', cors(), async (req: Request, res: Response): Promise<void> => {
    const city: string = (req.query.city as string) || 'Copenhagen';
    try {
        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},dk&appid=${API_KEY}`);
        const weatherData = weather.data;
        res.send(weatherData);
        console.log(weatherData);
        // res.render('index', {weatherData});    
    } catch (err) {
        console.error('Error', err)
        res.status(404).send("Could not fetch weather data");
    }
});

// Add a post request for the submit of a city in the ejs form to render a new city

app.get("*", (req: Request, res: Response): void => {
    res.send("Unknown path!");
});

app.use(express.static("./built"));

app.listen(3000, (): void => {
    console.log("listening on port 3000!");
});