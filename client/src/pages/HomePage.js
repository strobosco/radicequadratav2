import Metodo from './components/Metodo';
import Titolo from "./components/Titolo";
import NumericalAnalysis from "./components/NumericalAnalysis";
import { Link } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {

  const [showDescription, setShowDescription] = useState([
    {
      id: 0,
      isShown: false,
    }, {
      id: 1,
      isShown: false,
    }, {
      id: 2,
      isShown: false,
    }, {
      id: 3,
      isShown: false,
    }, {
      id: 4,
      isShown: false,
    }
  ]);

  const [risultatoBabilonese, setRisultatoBabilonese] = useState("");
  const [risultatoErrore, setRisultatoErrore] = useState("");
  const [risultatoTangenti, setRisultatoTangenti] = useState("");
  const [risultatoInverso, setRisultatoInverso] = useState("");

  const toggleDesc = (id) => {
    setShowDescription(showDescription.map((showDescription) => 
      showDescription.id === id ? {...showDescription, isShown: !showDescription.isShown} : showDescription
    ))
  };

  return (
    <>
    <Titolo />
    <NumericalAnalysis showDesc={showDescription[4]} onToggle={toggleDesc} />
    <Metodo nameOfClass={"babilonese"} showDesc={showDescription[0]} onToggle={toggleDesc} risultato={risultatoBabilonese} setRisultato={setRisultatoBabilonese}  />
    <Metodo nameOfClass={"errore"} showDesc={showDescription[1]} onToggle={toggleDesc} risultato={risultatoErrore} setRisultato={setRisultatoErrore} />
    <Metodo nameOfClass={"tangenti"} showDesc={showDescription[2]} onToggle={toggleDesc} risultato={risultatoTangenti} setRisultato={setRisultatoTangenti} />
    <Metodo nameOfClass={"inverso"} showDesc={showDescription[3]} onToggle={toggleDesc} risultato={risultatoInverso} setRisultato={setRisultatoInverso} />
    <a className="calcola" href="https://github.com/strobosco/radicequadratav2">Link to GitHub Repo</a>
    <Link className="calcola" to="/paragone">Paragone</Link>
    </>
  );
}

export default HomePage;
