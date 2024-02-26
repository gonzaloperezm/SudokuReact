import { ReactNode, createContext, useContext, useEffect, useRef, useState } from "react";
import { checkBoard, createBoard } from "../functions/function";
import { Contexto, matriz, tablero } from "../models/types/type";
import { Casilla } from "../models/classes/casilla";
import { ModalRef } from "./Modal";




export interface RefContextProps {
    modalRef: React.RefObject<ModalRef>

}

export const ContextoBoard = createContext<Contexto>({
    data: [],
    changeValue: () => { },
    changeColor: () => { },
    RefForModal: undefined
});

type boardContextProps = {
    contenido: matriz,
    children: ReactNode
}
export const BoardContext = (props: boardContextProps) => {

    const tablero = createBoard(props.contenido)
    const [data, setData] = useState(tablero);

    const myRef = useRef<ModalRef>(null)



    function changeValue(number: Casilla, newValue: number | null, data: tablero) {
        const newData = data.map(row => row.slice());
        newData[number.x][number.y].value = newValue;
        setData(newData);

    }


    function changeColor(id: string[], color: string, data: tablero) {

        const newData = data.map(row => row.slice());
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
        if (winner) {
            myRef.current?.showModal();
        }
    }, [winner])

    const contexto: Contexto = {
        data: data,
        changeValue: changeValue,
        changeColor: changeColor,
        RefForModal: { modalRef: myRef }
    };

    return (
        <>
            <ContextoBoard.Provider value={contexto}>


                {props.children}


            </ContextoBoard.Provider>

        </>


    )

}


export const useModal = () => {
    const context = useContext(ContextoBoard);
    if (!context.RefForModal) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context.RefForModal;
};