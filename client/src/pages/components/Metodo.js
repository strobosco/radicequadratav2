import Descrizione from "./Descrizione"
import Calcolo from "./Calcolo"

const Metodo = ({ nameOfClass, showDesc, onToggle, setRisultato, risultato }) => {

    switch(nameOfClass) {
        case "babilonese":
            var method = "Babilonese"
            break
        case "errore":
            var method = "Errore"
            break
        case "tangenti":
            var method = "Tangenti"
            break
        case "inverso":
            var method = "Inverso"
            break
    }

    return (
        <div className={nameOfClass}>
            <button type="button" className="collapsible" onClick={() => onToggle(showDesc.id)}>Metodo {method}</button> <br/><br/>     
            {showDesc.isShown && <Descrizione nameOfClass={nameOfClass} />} <br/>
            <Calcolo nameOfClass={nameOfClass} setRisultato={setRisultato} />
            <span id={"risultato" + nameOfClass}>{risultato}</span> 
        </div>
    )
}

export default Metodo
