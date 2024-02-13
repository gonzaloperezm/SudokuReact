

import { useEffect, useState } from 'react';
import './style.css'

import { Casilla, useBoardData, useChangeBoard, useChangeColor } from './boardContext';
import { checkBoard } from '../functions/function';

type Props = {
    number: Casilla;
}





const Box: React.FC<Props> = ({ number }) => {

    const content = useBoardData();
    const changeBoard = useChangeBoard()
    const changeColor = useChangeColor()
    const white = "white";
    const red = "rojo"

    const [id, setId] = useState<string[]>([])
    
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        
        const newValue = event.target.value;
        changeBoard(number, isNaN(newValue) ? parseInt(event.target.value): parseInt(newValue))
        
        const boardCheckResult = checkBoard(content);
        console.log("check board: ",boardCheckResult)

        const previousIds= id;
        setId(boardCheckResult || []);
        
        previousIds.forEach((prevId)=>{
            if (!boardCheckResult || !boardCheckResult.includes(prevId)) {
                changeColor([prevId], white);
            }
        })
        console.log("ids: ",id)
        number.color = white
        if (boardCheckResult) {
           
            changeColor(boardCheckResult, red);
            
        }else{
            changeColor(id,white)
        }

        setValueNumber(newValue);

        }


    



    const [valueNumber, setValueNumber] = useState<number | string>(number.value == null ? '' : number.value)

    
    return (

        <input type="text"
            maxLength={1}
            onChange={handleChange}
            value={valueNumber}
            disabled={number.defaultValue ? true : false}
            className={number.color} />

    )
}


export default Box

