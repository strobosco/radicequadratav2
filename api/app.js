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
        case "inverso":
            risultato = 1 / radice.Inverso(radicando, iterazioni);
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

app.post("/paragone", (req, res) => {
    console.log("Request received!");
    data = req.body;
    radicando = req.body.radicando;
    iterazioni = req.body.iterazioni;
    confronti = req.body.confronti;
    
    var risultato = [];
    for(var i = 0; i < confronti; i++) {

        let risBab = radice.Babilonese(radicando, iterazioni);
        let risErr = radice.Errore(radicando, iterazioni);
        let risTan = radice.Tangenti(radicando, iterazioni);
        let risInv = 1 / radice.Inverso(radicando, iterazioni);

        risultato[i] = {
            confronto: i + 1,
            babilonese: risBab,
            errore:risErr,
            tangenti: risTan,
            inverso: risInv,
        }

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