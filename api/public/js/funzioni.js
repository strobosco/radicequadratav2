module.exports.Babilonese = function Babilonese(num, iterazioni){

    var Q, Qprec, n;
    n = 0;
    Qprec = num / 2;
    for(n = 0; n < iterazioni; n++){
        Q = (Qprec + num / Qprec) / 2;
        Qprec = Q;
    }

    return Q;

}

module.exports.Errore = function Errore(num, iterazioni){

    const EPS = 0.00001;

    var Q, Qprec, errore;
    var n, esci = 0;
    Qprec = num / 2;
    for(n = 0; n < iterazioni && !esci; n++){
        Q = (Qprec + num / Qprec) / 2;
        errore = Math.abs((Q - Qprec) / Q);
        if(errore < EPS) {
            esci = 1;
        } else {
            Qprec = Q;
        }
    }

    return Q;
}

// da definire tangenti e inverso

module.exports.Tangenti = function Tangenti(num, iterazioni){

    var volte = 0;
    var x = 1.0;
    for(volte = 0; volte <= iterazioni; volte++){
        x = (x / 2) + (num / (2 * x));
    }

    return x;

}

module.exports.Inverso = function Inverso(num, iterazioni){

    var volte = 0;
    var x = 0.002;
    for(volte = 0; volte <= iterazioni; volte++){
        x = 0.5 * x * (3 - num * x * x);
    }
    
    return x;

}