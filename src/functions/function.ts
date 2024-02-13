import { Casilla } from "../components/boardContext";

export function checkRow(content: Casilla[][]) {
    const duplicados = []
    for (let i = 0; i < 9; i++) {
        for (let k = 0; k < 9; k++) {
            if (content[i][k].value !== null) {
                for (let j = 0; j < 9; j++) {
                    if (content[i][k].value === content[i][j].value && content[i][k].y !== content[i][j].y) {
                        duplicados.push(content[i][k].id);
                    }
                }
            }
        }
    }
    return duplicados.length >0 ? duplicados: false
}
export function getInitial(coordenada: number) {
    switch (coordenada) {
        case 0: case 1: case 2:
            return 0;
        case 3: case 4: case 5:
            return 3;
        case 6: case 7: case 8:
            return 6;
        default:
            return 0
    }
}
export function checkSquare(initialRow: number, initialColumn: number, content: Casilla[][]) {
    const duplicates = [];
    for (let i = initialRow; i < initialRow + 3; i++) {
        for (let k = initialColumn; k < initialColumn + 3; k++) {
            for (let j = initialRow; j < initialRow + 3; j++) {
                for (let l = initialColumn; l < initialColumn + 3; l++) {
                    if (i !== j || k !== l) {
                        if (content[i][k].value !== null && content[j][l].value !== null) {
                            if (content[i][k].value === content[j][l].value) {
                                duplicates.push(content[i][k].id);
                            }
                        }
                    }
                }
            }
        }
    }
    return duplicates.length > 0 ? duplicates : false;
}

export function checkAllSquares(content: Casilla[][]) {
    const duplicates = [];
    for (let initialRow = 0; initialRow < 9; initialRow += 3) {
        for (let initialColumn = 0; initialColumn < 9; initialColumn += 3) {
            const squareDuplicates = checkSquare(initialRow, initialColumn, content);
            if (squareDuplicates !== false) {
                duplicates.push(...squareDuplicates);
            }
        }
    }
    return duplicates.length > 0 ? duplicates : false;
}



export function checkColumn(content: Casilla[][]) {
    const duplicados = []
    for(var i=0; i<9;i++){
        for(var k=0;k<9;k++){
            if(content[k][i].value !== null){
                for(var j=0; j<9;j++){
                    if(content[k][i].value === content[j][i].value && content[k][i].x !== content[j][i].x){
                        duplicados.push(content[k][i].id)
                    }
                }
            }
        }
    }
    return duplicados.length>0?duplicados: false
}


export function checkBoard(data: Casilla[][]) {
    const cuadricula = checkAllSquares(data)
    const fila = checkRow(data);
    const columna = checkColumn(data);
  
    const id = []
    if (fila) {
        id.push(...fila)
    }
    if (columna) {
        id.push(...columna)
    }
    if (cuadricula) {

        id.push(...cuadricula)
    }
    if(id.length===0){
        return false
    }
    return id
}


export function getRandom(){
    return Math.floor(Math.random()*9)+1
}