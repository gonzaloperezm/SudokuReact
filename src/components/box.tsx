


import '../styles/style.css'

import { Casilla } from '../models/classes/casilla';


type Props = {
    casilla: Casilla;
    onNumberChange: (event:any,number: Casilla) =>void
}





const Box: React.FC<Props> = ({ casilla,onNumberChange }) => {


    return (

        <input type="text"
            maxLength={1}
            onChange={(e)=>{onNumberChange(e,casilla)}}
            value={casilla.value || ""}
            disabled={casilla.defaultValue ? true : false}
            className={casilla.color} 
            data-testid={casilla.id}
            inputMode="numeric"/>

    )
}


export default Box

