const express = require("express");
const path = require("path");
const radice = require("./public/js/funzioni");

const app = express();
const PORT = 8080;

app.use(express.json(limit="1mb"));
//app.use(express.static(path.join(__dirname + "public/css")));

/*app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/../client/public/index.html"));
});*/

app.post("/", (req, res) => {
    console.log("Request received!");
    data = req.body;
    metodo = req.body.metodo;
    radicando = req.body.radicando;
    iterazioni = req.body.iterazioni;
    
    var risultato = 0;
    switch(metodo){
        case "babilonese":
            risultato = radice.Babilonese(radicando, iterazioni);
            break;
        case "errore":
            risultato = radice.Errore(radicando, iterazioni);
            break;
        case "tangenti":
            risultato = radice.Tangenti(radicando, iterazioni);
            break;
        default:
            console.log("Metodo non supportato.");
            break;
    }

    console.log({data, risultato});
    res.json({
        status: "success",
        radicando: radicando,
        iterazioni: iterazioni,
        risultato: JSON.stringify(risultato)
    });
});

app.listen(PORT, () => {
    console.log("App listening on: ${PORT}");
});