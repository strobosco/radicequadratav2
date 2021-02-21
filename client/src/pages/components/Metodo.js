import Descrizione from "./Descrizione"
import Calcolo from "./Calcolo"

const Metodo = ({ nameOfClass, showDesc, onToggle, setRisultato, risultato }) => {
    return (
        <div className={nameOfClass}>
            <button type="button" className="collapsible" onClick={() => onToggle(showDesc.id)}>Metodo {nameOfClass}</button> <br/><br/>     
            {showDesc.isShown && <Descrizione nameOfClass={nameOfClass} />} <br/>
            <Calcolo nameOfClass={nameOfClass} setRisultato={setRisultato} />
            <span id={"risultato" + nameOfClass}>{risultato}</span> 
        </div>
    )
}

export default Metodo
