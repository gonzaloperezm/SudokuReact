import { Col, Container, Row } from "react-bootstrap"
import Box from "./box"
import './style.css'

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
    <Container className="sudoku-board">
      {content.map((rows, rowIndex) => (

        <Row key={rowIndex} className={`p-0 ${((rowIndex + 1) % 3 === 0 && (rowIndex + 1) % 9 !== 0 ? 'borde' : '')}`} >

          {rows.map((casilla, colIndex) => (
            <Col key={colIndex} className={`p-0 ${((colIndex + 1) % 3 === 0 && (colIndex + 1) % 9 !== 0 ? 'borderight' : '')}`} >
              <Box casilla={casilla} onNumberChange={handleChange} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};











export default Square