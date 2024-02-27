import { useEffect, useState } from "react";
import { matriz } from "../models/types/type";
import { getSudoku, setLevel } from "../functions/function";
import { Button, Dropdown } from "react-bootstrap";
import { BoardContext } from "./boardContext";
import App from "../App";
import '../styles/principal.css'
import obtenerMatrizFacil from "../functions/data";



export const Principal = () => {
    const [matriz, setMatriz] = useState<matriz | null>(null);
    const [key, setKey] = useState(0);
    const [difficulty, setDifficulty] = useState<string>("Easy")
    useEffect(() => {
        setKey(prevKey => prevKey + 1)
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

    if (!matriz) {
        return <div>Cargando SUDOKU...</div>
    }
    async function handleClick(dificultad: number,level:string) {

        const matrizActualizada = await getSudoku()

        const matrizDificultad = setLevel(matrizActualizada, dificultad);

        setMatriz(matrizDificultad);
        console.log("dificultad", matrizDificultad);
        setDifficulty(level)
    }



    return (
        <>
            
            <div className="col-12 botones">
                <Dropdown>
                    <Dropdown.Toggle >
                        New
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item><Button onClick={() => handleClick(20,"Easy")} className="level col-sm-12">Easy</Button></Dropdown.Item>
                        <Dropdown.Item><Button onClick={() => handleClick(35,"Medium")} className="level col-sm-12">Medium</Button></Dropdown.Item>
                        <Dropdown.Item><Button onClick={() => handleClick(45,"Hard")} className="level col-sm-12">Hard</Button></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
               
                
                
            
            </div>
            <span className="level">{difficulty}</span>
            <BoardContext contenido={matriz} key={key} data-testid="board">
                <App />
            </BoardContext>
            
        </>
    )
}