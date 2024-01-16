
import "./Aktualis.css";
import { useState } from "react";

export default function Aktualis(props) {
    const [mondat, setMondat] = useState(props.mondatok.mondatOsszeallit(props.index));
    

    function valChange() {
        if (props.index-1 === props.mondatok.index) {
            props.setIndex(2);
            props.mondatok.setIndex(props.index);
        }
        if (document.getElementById("bemenet").value === mondat.helyes) {
            props.setIndex(props.index + 1);
            document.getElementById("nemjo").style.display = "none";
            setMondat(props.mondatok.mondatOsszeallit(props.index));
            document.getElementById("bemenet").value = "";
        } else {
            document.getElementById("nemjo").style.display = "inline";
        }
        
    }

  return (
    <div className="Aktualis">
        <h1>{props.mondatok.cim}</h1>
        <p>{mondat.magyar}</p>
        <article>
        <span>{mondat.mondat.split("_")[0]}</span>
        <input type="text" id="bemenet"/>
        <span>{mondat.mondat.split("_")[1]}</span>
        <button onClick={valChange}>Következő</button>
        <span id="nemjo">❌</span>
        </article>
        
        <p>Pontok: {props.index-2}</p>
    </div>
  );
}