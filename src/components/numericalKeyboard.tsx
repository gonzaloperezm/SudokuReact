import React from 'react';
import { Col, Row } from 'react-bootstrap';

const NumericalKeyboard: React.FC<{ onSelectNumber: (number: number) => void }> = ({ onSelectNumber }) => {
    const handleNumberClick = (number: number) => {
        onSelectNumber(number);
    };

    return (
        <div>
            <Row>
                <Col>
                    <button onClick={() => handleNumberClick(1)}>1</button>
                </Col>
                <Col>
                    <button onClick={() => handleNumberClick(2)}>2</button>
                </Col>
                <Col>
                    <button onClick={() => handleNumberClick(3)}>3</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={() => handleNumberClick(4)}>4</button>
                </Col>
                <Col>
                    <button onClick={() => handleNumberClick(5)}>5</button>
                </Col>
                <Col>
                    <button onClick={() => handleNumberClick(6)}>6</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={() => handleNumberClick(7)}>7</button>
                </Col>
                <Col>
                    <button onClick={() => handleNumberClick(8)}>8</button>
                </Col>
                <Col>
                    <button onClick={() => handleNumberClick(9)}>9</button>
                </Col>
            </Row>
        </div>
    );
};

export default NumericalKeyboard;
