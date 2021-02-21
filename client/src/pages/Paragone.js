import Titolo from "./components/TitoloParagone";
import ParagoneInput from "./components/ParagoneInput";
import Table from './components/Table'
import { useState } from "react";

const Paragone = () => {

    const [risultato, setRisultato] = useState([])
    const [showHead, setShowHead] = useState(false)

    return (
        <>
        <Titolo />
        <ParagoneInput risultato={risultato} setRisultato={setRisultato} showHead={showHead} setShowHead={setShowHead} />
        <Table risultato={risultato} showHead={showHead} />
        </>
    );
}


export default Paragone;
