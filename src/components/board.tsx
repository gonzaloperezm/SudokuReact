import { Col, Row } from "react-bootstrap"
import Square from "./square"

import { useBoardData } from "./boardContext";




export const Board = ()=>{

    const content = useBoardData()
    
    


    

                
    console.log(content)




    return(
        <div className="board"> 
        {content.map((row, index)=> 
            <Row key={index} >
                <Col ><Square  rows={row}></Square></Col>
            </Row>
            )
           
        }       
        </div>
    )
}
