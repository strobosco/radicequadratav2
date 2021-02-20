// Funzioni per le sezioni apribili
function babiloneseCollapsible(){

    var button = document.getElementsByClassName("collapsible");
    button[0].classList.toggle("active");

    var div = document.getElementsByClassName("babilonese-collapsible");
    if(div[0].style.display == "block"){
        div[0].style.display = "none";
    } else {
        div[0].style.display = "block";
    }

}

function erroreCollapsible(){

    var button = document.getElementsByClassName("collapsible");
    button[1].classList.toggle("active");

    var div = document.getElementsByClassName("errore-collapsible");
    if(div[0].style.display == "block"){
        div[0].style.display = "none";
    } else {
        div[0].style.display = "block";
    }

}

function tangentiCollapsible(){

    var button = document.getElementsByClassName("collapsible");
    button[2].classList.toggle("active");

    var div = document.getElementsByClassName("tangenti-collapsible");
    if(div[0].style.display == "block"){
        div[0].style.display = "none";
    } else {
        div[0].style.display = "block";
    }

}

function inversoCollapsible(){

    var button = document.getElementsByClassName("collapsible");
    button[3].classList.toggle("active");

    var div = document.getElementsByClassName("inverso-collapsible");
    if(div[0].style.display == "block"){
        div[0].style.display = "none";
    } else {
        div[0].style.display = "block";
    }

}


//--------------------------------------------------------

async function postJSONBabilonese(){

    let radicando = document.getElementById("radicando-babilonese").value;
    let iterazioni = document.getElementById("ripetizioni-babilonese").value;

    const data = {
        metodo: "babilonese",
        radicando: radicando,
        iterazioni: iterazioni
    };
    var json = JSON.stringify(data);

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: json
    };

    const res = await fetch("/", options);
    const resjson = await res.json();
    console.log(resjson);
}

async function postJSONErrore(){

    let radicando = document.getElementById("radicando-errore").value;
    let iterazioni = document.getElementById("ripetizioni-errore").value;

    const data = {
        metodo: "errore",
        radicando: radicando,
        iterazioni: iterazioni
    };
    var json = JSON.stringify(data);

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: json
    };

    const res = await fetch("/", options);
    const resjson = await res.json();
    console.log(resjson);
}

async function postJSONTangenti(){

    let radicando = document.getElementById("radicando-tangenti").value;
    let iterazioni = document.getElementById("ripetizioni-tangenti").value;

    const data = {
        metodo: "tangenti",
        radicando: radicando,
        iterazioni: iterazioni
    };
    var json = JSON.stringify(data);

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: json
    };

    const res = await fetch("/", options);
    const resjson = await res.json();
    console.log(resjson);
}