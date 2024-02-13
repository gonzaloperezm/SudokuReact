import { Col, Container, Row } from "react-bootstrap"
import Box from "./box"
import './style.css'

import { Casilla, useBoardData } from "./boardContext"

export const Square = () => {
    const content: Casilla[][] = useBoardData()

    
        
        return (
            <Container className="sudoku-board">
              {content.map((rows, rowIndex) => (
                
                <Row key={rowIndex} className={`p-0 ${((rowIndex+1)%3===0 && (rowIndex+1)%9!==0?'borde':'')}`} >
                    
                  {rows.map((casilla, colIndex) => (
                    <Col key={colIndex} className={`p-0 ${((colIndex+1)%3===0 && (colIndex+1)%9!==0?'borderight':'')}`} >
                      <Box number={casilla} />
                    </Col>
                  ))}
                </Row>
              ))}
            </Container>
          );
        };

       

    







export default Square