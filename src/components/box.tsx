


import './style.css'

import { Casilla,  } from './boardContext';


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
            className={casilla.color} />

    )
}


export default Box

