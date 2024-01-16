import { szenvedoMondatok } from "./angol";

class MondatokModel {
    #angol = []
    #aktObj = {}
    #index;
    constructor() {
        this.#angol = szenvedoMondatok;
        this.#index = 2;
    }

    mondatOsszeallit(i) {
        let obj = this.#angol[i];
        this.#aktObj = {
            magyar:obj.magyar,
            mondat:obj.mondat,
            alap:obj.alap,
            valasztas: obj.valasztas,
            helyes: obj.valasztas[0]
        }
        return this.#aktObj;
    }

    get cim() {
        return this.#angol[0];
    }
    get magyar() {
        return this.#angol[0];
    }

    get hossz() {
        return this.#angol.length;
    }

    get index() {
        return this.#index;
    }

    setIndex(index) {
        this.#index = index;
    }

} 

export default MondatokModel;