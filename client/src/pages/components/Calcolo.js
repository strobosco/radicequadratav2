import { useState } from "react"

const Calcolo = ({ nameOfClass, setRisultato }) => {

    const [radicando, setRadicando] = useState("")
    const [ripetizioni, setRipetizioni] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            metodo: nameOfClass,
            radicando: radicando,
            iterazioni: ripetizioni
        }

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };

        const res = await fetch("/", options)
        const resjson = await res.json()

        setRisultato(resjson.risultato)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="number" id={"radicando" + nameOfClass} placeholder="Radicando" value={radicando} onChange={(e) => setRadicando(e.target.value)}></input> <br></br> <br></br>
                <input type="number" id={"ripetizioni" + nameOfClass} placeholder="Ripetizioni massime" value={ripetizioni} onChange={(e) => setRipetizioni(e.target.value)}></input> <br></br> <br></br>
                <input type="submit" value="Calcola!" className="calcola"></input>
            </form>
        </>
    )
}

export default Calcolo
