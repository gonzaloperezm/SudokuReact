


import '../styles/style.css'

import { Casilla } from '../models/classes/casilla';


type Props = {
    casilla: Casilla;
    onNumberChange: (event:any,number: Casilla) =>void;
    onClick: () => void;
}





const Box: React.FC<Props> = ({ casilla,onNumberChange, onClick }) => {

    const handleClick = () => {
        onClick();
      };
    return (
        <div onClick={handleClick}>

        <input type="text"
            inputMode="numeric"
            maxLength={1}
            onChange={(e)=>{onNumberChange(e,casilla)}}
            value={casilla.value || ""}
            disabled={casilla.defaultValue ? true : false}
            className={`${casilla.defaultValue ? 'unmodifiable' : ''} ${casilla.color}`} 
            data-testid={casilla.id}
           />
        </div>
    )
}


export default Box

