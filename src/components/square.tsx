import { Col, Container, Row } from "react-bootstrap"
import Box from "./box"
import './style.css'

import { Casilla, useBoardData, useChangeBoard, useChangeColor } from "./boardContext"
import { checkBoard } from "../functions/function";
import { useEffect, useState } from "react";

export const Square = () => {
  const content: Casilla[][] = useBoardData()
  const changeBoard = useChangeBoard()
  const changeColor = useChangeColor()
  const white = "white";
  const red = "rojo"
  const [id, setId] = useState<string[]>([])

  function handleChange(event: any, casilla: Casilla) {
    const newValue = event.target.value;

    changeBoard(casilla, isNaN(parseInt(newValue)) ? null : parseInt(newValue))

    const boardCheckResult = checkBoard(content);

    if (boardCheckResult) {

      changeColor(boardCheckResult, red);

    } else {
      changeColor(id, white)
    }

  }

  useEffect(() => {
    const boardCheckResult = checkBoard(content)
    const previousIds = [...id];

    setId(boardCheckResult ? boardCheckResult : []);

    previousIds.forEach((prevId) => {
      if (!boardCheckResult || !boardCheckResult.includes(prevId)) {
        changeColor([prevId], white);
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