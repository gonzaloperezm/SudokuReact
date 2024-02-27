import { useEffect, useState } from "react";
import { matriz } from "../models/types/type";
import { getSudoku, setLevel } from "../functions/function";
import { Button } from "react-bootstrap";
import { BoardContext } from "./boardContext";
import App from "../App";
import '../styles/principal.css'
import obtenerMatrizFacil from "../functions/data";


export const Principal = () => {
    const [matriz, setMatriz] = useState<matriz | null>(null);
    const [key, setKey] = useState(0);
    useEffect(() => {
        setKey(prevKey => prevKey+1)
    }, [matriz])
    useEffect(() => {
        async function obtenerMatrizInicial() {
            try {
                const matrizFacil = await obtenerMatrizFacil(); 
                setMatriz(matrizFacil);
            } catch (error) {
                console.error('Error al obtener la matriz del sudoku:', error);
                
            }
        }
        obtenerMatrizInicial();
    }, []);

    if(!matriz){
        return <div>Cargando SUDOKU...</div>
    }
    async function handleClick(dificultad: number) {

        const matrizActualizada = await getSudoku()

        const matrizDificultad = setLevel(matrizActualizada, dificultad);

        setMatriz(matrizDificultad);
        console.log("dificultad", matrizDificultad);
    }



    return (
        <>  
            <div className="col-12 botones">
                <Button onClick={() => handleClick(20)} className="level col-sm-3">Easy</Button>
                <Button onClick={() => handleClick(35)} className="level col-sm-3">Medium</Button>
                <Button onClick={() => handleClick(45)} className="level col-sm-3">Hard</Button>
                <Button onClick={() => handleClick(60)} className="level col-sm-3">Impossible</Button>
            </div>
           
            <BoardContext contenido={matriz} key={key} data-testid="board">
                <App />
            </BoardContext>
        </>
    )
}