import { Col, Container, Row } from "react-bootstrap"
import Box from "./box"
import '../styles/style.css'

import {   ContextoBoard } from "./boardContext"
import { checkBoard } from "../functions/function";
import {  useContext, useEffect, useState } from "react";
import { tablero } from "../models/types/type";
import { Casilla } from "../models/classes/casilla";


export const Square = () => {
  const { data, changeValue, changeColor } = useContext(ContextoBoard)
  const content: tablero = data
  const changeValueContext = changeValue
  const changeColorContext = changeColor
  const white = "white";
  const red = "rojo"
  const [id, setId] = useState<string[]>([])
  const [selectedCell, setSelectedCell] = useState<Casilla | null>(null);
  function handleChange(event: any, casilla: Casilla) {
    const newValue = event.target.value;

    changeValueContext(casilla, isNaN(parseInt(newValue)) ? null : parseInt(newValue),content)

    const boardCheckResult = checkBoard(content);

    if (boardCheckResult) {

     changeColorContext(boardCheckResult, red,content);

    } else {
      
      changeColorContext(id, white,content)
    }

  }
 

  function handleClick(casilla: Casilla) {
    setSelectedCell(casilla); 
    console.log("seleccion",selectedCell)
  }
  
  useEffect(() => {
    if (selectedCell) {
      const { x: fila, y: columna,value,color } = selectedCell; 
      const idsToColor: string[] = [];
      for (let i = 0; i < 9; i++) {
        if(color!="rojo"){
          idsToColor.push(`${fila},${i}`);
          idsToColor.push(`${i},${columna}`);
        }
        
      }

      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (content[i][j].value === value && value!=null && color!="rojo") {
            idsToColor.push(`${i},${j}`);
          }
        }
      }
      changeColorContext(idsToColor, "green", content); 
     
      const allIds: string[] = [];
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          allIds.push(`${i},${j}`);
        }
      }
      const idsToRestore = allIds.filter(id => {
        const [x, y] = id.split(",").map(Number); 
         if (typeof x !== 'number' || typeof y !== 'number') return false; 
         return content[x][y].color !== "rojo" && !idsToColor.includes(id);
    });
    changeColorContext(idsToRestore, white, content);
    } 
  }, [selectedCell]);
  

  useEffect(() => {
    const boardCheckResult = checkBoard(content)
    const previousIds = [...id];

    setId(boardCheckResult ? boardCheckResult : []);

    previousIds.forEach((prevId) => {
      if (!boardCheckResult || !boardCheckResult.includes(prevId)) {
        changeColorContext([prevId], white,content);
      }
    })
  }, [content])


  return (
    <div>
   
    <Container className="sudoku-board">
      <Row>


      </Row>
      {content.map((rows, rowIndex) => (

        <Row key={rowIndex} className={`p-0 ${((rowIndex + 1) % 3 === 0 && (rowIndex + 1) % 9 !== 0 ? 'borde' : '')}`} >

          {rows.map((casilla, colIndex) => (
            <Col key={colIndex} className={`p-0 ${((colIndex + 1) % 3 === 0 && (colIndex + 1) % 9 !== 0 ? 'borderight' : '')}`} >
              <Box casilla={casilla} onNumberChange={handleChange} onClick={()=> handleClick(casilla)}/>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
    
    </div>
    

  );
};











export default Square