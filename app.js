const express = require("express");
const path = require("path");
const body = require("body-parser")

const app = express();
const PORT = 8080;

app.use(express.json(limit="1mb"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/html/index.html"));
});

app.post("/", (req, res) => {
    console.log("Request received!");
    data = req.body;
    console.log(data);
    res.json({
        status: "success",
        radicando: data.radicando,
        iterazioni: data.iterazioni
    });
});

app.listen(PORT, () => {
    console.log("App listening on:${PORT}");
});