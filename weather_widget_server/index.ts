import express, { Application, Request, Response } from "express";
import axios from "axios";
import cors from "cors";

const API_KEY: string = "166d00e26d3ff2c6149e89feccc5c59a";
const app: Application = express();

app.get("/", (req: Request, res: Response): void => {
    res.send("This is the homepage");
});

app.get('/weather', cors(), async (req: Request, res: Response): Promise<void> => {
    const city: string = (req.query.city as string) || 'Copenhagen';
    try {
        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},dk&appid=${API_KEY}`);
        res.send(weather.data);        
    } catch(err) {
        console.error('Error', err)
        res.status(404).send("Could not fetch weather data");
    }
});



app.get("*", (req: Request, res: Response): void => {
    res.send("I don't know that path!");
});

app.listen(3000, (): void => {
    console.log("listening on port 3000!");
});