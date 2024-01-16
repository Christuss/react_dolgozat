import MondatokModel from "../model/MondatokModel";
import Aktualis from "./Aktualis";
import { useState } from "react";


export default function Gepel() {
    const MONDATOK = new MondatokModel();
    const [index, setIndex] = useState(MONDATOK.index);

  return (
    <div className="Gepel">
        <Aktualis mondatok = {MONDATOK} setIndex = {setIndex} index = {index}/>
    </div>
  );
}