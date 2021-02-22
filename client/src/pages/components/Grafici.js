import graficoMini from "../../grafici/MiniFigure.png";
import graficoBig from "../../grafici/BigFigure.png";

const Grafici = () => {
    return (
        <div className="grafici">
            <h1>Grafici</h1>
            <img src={graficoMini}></img> 
            <br /> <br />
            <img src={graficoBig}></img> 
        </div>
    )
}

export default Grafici
