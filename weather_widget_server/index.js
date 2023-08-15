const express = require("express");
const app = express()
console.dir(app)

const api_key = "166d00e26d3ff2c6149e89feccc5c59a";

app.get("/", (req, res) => {
    res.send("This is the homepage");
})

app.get('/search', (req, res) => {
    console.log(req.query);
    const { q } = req.query;
    res.send(`<h1>Search results for: ${q}</h1>`)
})



// Catch all route
app.get("*", (req, res) => {
    res.send("I don't know that path!");
})

app.listen(3000, () => {
    console.log("listening on port 3000!")
})