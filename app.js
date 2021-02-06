const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/html/index.html"));
});


app.listen(PORT, () => {
    console.log("App listening on:${PORT}");
})