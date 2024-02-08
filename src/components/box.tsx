

import { useState } from 'react';
import './style.css'

import { Casilla, useBoardData, useChangeBoard, useChangeColor } from './boardContext';

type Props = {
    number: Casilla;
}

export function checkRow(object: Casilla, content: Casilla[][]) {
    for (var i = 0; i < 9; i++) {
        if (content[object.x][i].value === object.value && content[object.x][i].y !== object.y) {
            return content[object.x][i].id
        }
    }
    return false
}
function getInitial(coordenada: number) {
    switch (coordenada) {
        case 0: case 1: case 2:
            return 0;
        case 3: case 4: case 5:
            return 3;
        case 6: case 7: case 8:
            return 6;
        default:
            return 0
    }
}
function checkSquare(object: Casilla, content: Casilla[][]) {
    let initialColumn = getInitial(object.y);
    let initialRow = getInitial(object.x);

    for (var i = initialRow; i < initialRow + 3; i++) {
        for (var k = initialColumn; k < initialColumn + 3; k++) {
            if (content[i][k].value === object.value && (content[i][k].x !== object.x || content[i][k].y !== object.y)) {
                return content[i][k].id
            }
        }
    }
    return false
}


export function checkColumn(object: Casilla, content: Casilla[][]) {
    for (var i = 0; i < 9; i++) {
        if (content[i][object.y].value == object.value && content[i][object.y].x !== object.x) {
            return content[i][object.y].id
        }
    }
    return false
}


function checkBoard(casilla: Casilla, data: Casilla[][]) {
    const cuadricula = checkSquare(casilla, data)
    const fila = checkRow(casilla, data);
    const columna = checkColumn(casilla, data);
    console.log(cuadricula, fila, columna)
    const id = []
    if (fila) {
        id.push(fila)
    }
    if (columna) {
        id.push(columna)
    }
    if (cuadricula) {

        id.push(cuadricula)
    }
    if(id.length>0){
        return id
    }
    return false
}




const Box: React.FC<Props> = ({ number }) => {

    const content = useBoardData();
    const changeBoard = useChangeBoard()
    const changeColor = useChangeColor()
    function handleChange(event: any) {

        const newValue = event.target.value;
        changeBoard(number, parseInt(newValue))
        if (isNaN(newValue)) {
            event.target.value = null
            changeBoard(number, parseInt(newValue))
        } else {
            changeBoard(number, parseInt(newValue))
            console.log("Fila: ", checkRow(number, content))
            console.log("Columna: ", checkColumn(number, content))
            console.log("Cuadricula: ", checkSquare(number, content))
            const boardCheckResult = checkBoard(number,content)
            if (boardCheckResult === false) {
                
                setValueNumber(newValue)
                
               
            } else {
                setValueNumber(newValue)
                changeColor(boardCheckResult)

            }



        }


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

