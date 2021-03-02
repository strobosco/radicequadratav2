import graficoMini from "../../grafici/MiniFigure.png";
import graficoBig from "../../grafici/BigFigure.png";

const Grafici = () => {
    return (
        <div className="grafici">
            <h1>Grafici</h1>
            <img src={graficoMini}></img> 
            <p className="didascalia">Il grafico mostra i valori ottenuti per radicando molto piccoli. Come possiamo vedere i metodi Babilonese
            ed Errore non hanno svolto sufficienti iterazioni per ottenere un valore paragonabile</p>
            <br /> <br />
            <img src={graficoBig}></img> 
            <p className="didascalia">Il grafico mostra i valori ottenuti per radicando molto grandi. Come possiamo vedere i metodi iniziano a
            ottenere valori diversi per radicando uguali</p>
            <br /> <br />
            <p className="didascalia">Ogni calcolo è stato svolto in 10 iterazioni</p>
        </div>
    )
}

export default Grafici