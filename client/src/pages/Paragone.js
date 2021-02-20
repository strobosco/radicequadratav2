import Titolo from "./components/TitoloParagone";
import ParagoneInput from "./components/ParagoneInput";
import { useState } from "react";

const Paragone = () => {

    const [risultato, setRisultato] = useState([])

    return (
        <>
        <Titolo />
        <ParagoneInput risultato={risultato} setRisultato={setRisultato} />
        </>
    );
}


export default Paragone;
