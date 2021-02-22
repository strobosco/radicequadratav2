import TableHead from "./TableHead";

const Table = ({ risultato, showHead }) => {

    const renderTbody = () => {
        
        return(
            risultato.map( ris => {
                return(
                    <tr key={ris.confronto} >
                        <td>{ris.confronto}</td>
                        <td>{ris.babilonese}</td>
                        <td>{ris.errore}</td>
                        <td>{ris.tangenti}</td>
                        <td>{ris.inverso}</td>
                    </tr>  
            )})
        )
    }

    return (
        <table className="tabella-output">
            {showHead ? (<TableHead />) : null}
            <tbody>
                {renderTbody()}
            </tbody> 
        </table>
    )
}

export default Table
