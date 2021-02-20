const Descrizione = ({ nameOfClass }) => {

    const chooseDesc = (nameOfClass) => {

        const descBabilonese = "Questo è il metodo babilonese";
        const descErrore = "Questo è il metodo errore";
        const descTangenti = "Questo è il metodo tangenti";

        switch(nameOfClass){
            case "babilonese":
                return descBabilonese;
                break;
            case "errore":
                return descErrore;
                break;
            case "tangenti":
                return descTangenti;
                break;
            default:
                return "Il metodo selezionato non esiste"
        }
    }

    return (
        <p>{chooseDesc(nameOfClass)}</p>
    )
}

export default Descrizione
