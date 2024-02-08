import { Col, Row } from "react-bootstrap"
import Box from "./box"
import './style.css'
import { Props } from "../types/type"
const Square:React.FC<Props> = ({ rows }) => {
   
    return (
        <div className="square">
            {
                rows.map((number,index)=>
                    <Row key={index}  >
                        <Col ><Box number={number} /></Col> 
                    </Row>
                        
                   
                )
            }
            
        </div>
    )
}

export default Square