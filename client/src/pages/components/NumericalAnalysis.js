const NumericalAnalysis = ({ showDesc, onToggle }) => {
    return (
        <div className="intro">
            <button type="button" className="collapsible" onClick={() => onToggle(showDesc.id)}>Numerical Analysis</button> <br/><br/>
            {showDesc.isShown ? (<div className="intro-text">
            <p>Numerical Analysis is the study of algorithms
            to solve problems of continuous mathematics. These algorithms
            allow for calculations that are quick, effective, and efficient.
            They have increased the speed with which calculations and approximations are done.</p>
            <p> There are several reasons why numerical analysis is necessary:
                <ul>
                    <li>The types of problems studied by numerical analysisare continuous
                    and have infinite solutions, thus approximations are necessary.</li>
                    <li>Algorithms that calculate exact solutions are inefficient</li>
                </ul>
            </p>
            </div>) : (<h1 className="intro-question" style={{textAlign: "center"}}>What is Numerical Analysis?</h1>) } <br/>
        </div>
    )
}

export default NumericalAnalysis
