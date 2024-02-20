import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { checkBoard, createBoard } from "../functions/function";
import { tablero } from "../models/types/type";
import { Casilla } from "../models/classes/casilla";





const BoardData = createContext<tablero>([])
const ChangeValue = createContext<(x: Casilla, i: number | null,data: tablero) => void>(() => {return [] });
const ChangeColor = createContext<(id: Array<string>, color: string,data: tablero) => void>(()=>{return []});

export function useBoardData() {
    return useContext(BoardData)
}

export function useChangeValue() {
    return useContext(ChangeValue)

}

export function useChangeColor() {
    return useContext(ChangeColor)
}








export interface ModalRef {
    showModal(): () => void,
    hideModal(): () => void
}
type boardContextProps = {
    contenido: (number | null)[][],
    openModal: ()=>void,
    children: ReactNode
}
export const BoardContext = (props: boardContextProps) => {
   
    const tablero = createBoard(props.contenido)
    const [data,setData] = useState(tablero);
    

    function changeValue(number: Casilla, newValue: number | null,data: tablero) {
        const newData = data.map(row => row.slice()); // Clonar el array de arrays
        newData[number.x][number.y].value = newValue;
        setData(newData);
        
    }

    
    function changeColor(id: string[], color: string,data: tablero) {
        
        const newData = data.map(row => row.slice()); // Clonar el array de arrays
    for (let i = 0; i < newData.length; i++) {
        for (let k = 0; k < newData[i].length; k++) {
            for (let x = id.length - 1; x >= 0; x--) {
                if (newData[i][k].id === id[x]) {
                    newData[i][k].color = color;
                }
            }
        }
    }
    setData(newData);
        
    }
    const [winner, setWinner] = useState(false)
    useEffect(() => {
        function checkWin(data: tablero) {
            let winner = true
            data.forEach(rows => {
                rows.forEach(casilla => {
                    if (casilla.value === null || isNaN(casilla.value) || casilla.value === 0) {
                        winner = false
                    } else {
                        if (checkBoard(data)) {
                            winner = false
                        }
                    }
                });
            });
            console.log("estado winnner: ", winner)
            setWinner(winner)
        }
        checkWin(data);
    }, [data]);

    useEffect(() => {
        if (winner && props.openModal) {
            props.openModal()
        }
    }, [winner])
    
   
    
    return (
        <>
            <BoardData.Provider value={data}>
                <ChangeValue.Provider value={changeValue}>
                    <ChangeColor.Provider value={changeColor}>

                        {props.children}

                    </ChangeColor.Provider>

                </ChangeValue.Provider>

            </BoardData.Provider>

        </>


    )

}


