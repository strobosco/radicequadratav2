import { useState } from "react";

const ParagoneInput = ({ risultato, setRisultato, showHead, setShowHead }) => {

    const [radicando, setRadicando] = useState("")
    const [ripetizioni, setRipetizioni] = useState("")
    const [confronti, setConfronti] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            radicando: radicando,
            iterazioni: ripetizioni,
            confronti: confronti
        }

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const res = await fetch("/paragone", options)
        const resjson = await res.json()
        const resjsonrisultato = JSON.parse(resjson.risultato)

        setRisultato(resjsonrisultato)
        console.log(risultato)

        if(showHead == false) {
            setShowHead(true)
        }
        /*const risBab = []
        const risErr = []
        const risTan = []
        

        resjsonrisultato.map( (ris) => {
            risBab.push(ris.babilonese)
            risErr.push(ris.errore)
            risTan.push(ris.tangenti)
        })

        console.log(risBab)
        setRisultato([
            risBab,
            risErr,
            risTan
        ])
        console.log(risultato)*/
    }

    return (
        <div className="tabella-output">
            <form onSubmit={onSubmit}>
                <input type="number" placeholder="Radicando" value={radicando} onChange={(e) => setRadicando(e.target.value)}></input> <br></br> <br></br>
                <input type="number" placeholder="Ripetizioni massime" value={ripetizioni} onChange={(e) => setRipetizioni(e.target.value)}></input> <br></br> <br></br>
                <input type="number" placeholder="Numero confronti" value={confronti} onChange={(e) => setConfronti(e.target.value)}></input> <br></br> <br></br>
                <input type="submit" value="Paragona!" className="calcola"></input>
            </form>      
        </div>
    )

}

export default ParagoneInput;