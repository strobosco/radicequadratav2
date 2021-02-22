const Descrizione = ({ nameOfClass }) => {

    const chooseDesc = (nameOfClass) => {

        const descBabilonese = "Il metodo babilonese approssima la radice \
        calcolando più volte la media artimetica di due numeri";
        const descErrore = "Il metodo con controllo dell'errore approssima \
        la radice controllando l'aumento di precisione tra due iterazioni successive";
        const descTangenti = "Il metodo delle tangenti viene ideato da Newton";
        const descInverso = "Il metodo dell'inverso viene ideato da Newton";

        switch(nameOfClass){
            case "babilonese":
                return (<>
                <p>{descBabilonese}</p>
                <img src="https://miro.medium.com/max/237/0*eZi6AX0tWAmI-ICy.png" />
                </>) ;
                break;
            case "errore":
                return (<>
                <p>{descErrore}</p>
                </>);
                break;
            case "tangenti":
                return (<>
                <p>{descTangenti}</p>
                <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/0ff048abd4c1a8244f09ce8a7ff394626bdb6f80" />
                </>);
                break;
            case "inverso":
                return (<>
                    <p>{descInverso}</p>
                </>)
            default:
                return "Il metodo selezionato non esiste"
        }
    }

    return (
        <>{chooseDesc(nameOfClass)}</>
    )
}

export default Descrizione
