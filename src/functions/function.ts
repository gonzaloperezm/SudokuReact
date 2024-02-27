import { Casilla } from "../models/classes/casilla";
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
    return duplicados.length > 0 ? duplicados : false
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
    for (let i = 0; i < 9; i++) {
        for (let k = 0; k < 9; k++) {
            if (content[k][i].value !== null) {
                for (let j = 0; j < 9; j++) {
                    if (content[k][i].value === content[j][i].value && content[k][i].x !== content[j][i].x) {
                        duplicados.push(content[k][i].id)
                    }
                }
            }
        }
    }
    return duplicados.length > 0 ? duplicados : false
}


export function checkBoard(data: Casilla[][]) {
    const cuadricula = checkAllSquares(data)
    const fila = checkRow(data);
    const columna = checkColumn(data);
    
    const id: Array<string> = []
    if (fila) {
        fila.forEach((numId) => {
            if (!id.includes(numId)) {
                id.push(numId)
                
            }
        })
    }
    if (columna) {
        columna.forEach((numId) => {
            if (!id.includes(numId)) {
                id.push(numId)
            }
        })
    }
    if (cuadricula) {
        cuadricula.forEach((numId) => {
            if (!id.includes(numId)) {
                id.push(numId)
            }
        })

    }
    if (id.length === 0) {
        return false
    }
    return id
}


export function getRandom() {
    return Math.floor(Math.random() * 9) + 1
}


export function createBoard(contenido: (number | null)[][]): Casilla[][]{
    const content: Casilla[][] = []
    for (let i = 0; i < 9; i++) {

        const row: Array<Casilla> = []
        for (let k = 0; k < 9; k++) {
    
            const id = `${i},${k}`;
            const defaultValue = contenido[i][k] ? true : false;
            const value = contenido[i][k];
            const x = i;
            const y = k;
            const color = "";
    
    
            const casilla = new Casilla(id, x, y, defaultValue, value, color);
            row.push(casilla)
    
        }
        content.push(row)
    
    }
    return content;
}

export function  getSudoku() {
    return fetch('https://sudoku-api.vercel.app/api/dosuku')
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud a la API no fue exitosa.');
        }
        return response.json();
      })
      .then(data => {
        const matriz = data.newboard.grids[0].solution;
        return matriz;
      })
      .catch(error => {
        console.error('Error al obtener la matriz del sudoku:', error);
        throw error;
      });
  }
  

 export function setLevel(matriz: (number | null)[][],cantidad: number){

    const size = matriz.length
    for(let i =0; i<cantidad;i++){
        const fila = Math.floor(Math.random()*size)
        const columna = Math.floor(Math.random()*size)
        if(matriz[fila][columna]===null){
            i-=1;
        }else{
            matriz[fila][columna] = null;
        }
        
    }
    return matriz
  }
  
 export function changeRowColumnColor(casilla: Casilla){
    for(var i=0;i<9;i++){
        casilla
    }
 }

/*class SudokuGenerator {
    private board: number[][];
    private readonly boardSize: number;
    private readonly subgridSize: number;
    private readonly numbers: number[];

    constructor(size: number) {
        this.boardSize = size;
        this.subgridSize = Math.sqrt(size);
        this.numbers = this.shuffle([...Array(size).keys()].map(x => x + 1));
        this.board = this.generateBoard();
    }

    private shuffle(array: any[]): any[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    private generateBoard(): number[][] {
        const board = Array.from(Array(this.boardSize), () => Array(this.boardSize).fill(0));
        this.solve(board);
        return board;
    }

    private isValid(board: number[][], row: number, col: number, num: number): boolean {
        for (let i = 0; i < this.boardSize; i++) {
            if (board[row][i] === num || board[i][col] === num) {
                return false;
            }
        }

        const startRow = Math.floor(row / this.subgridSize) * this.subgridSize;
        const startCol = Math.floor(col / this.subgridSize) * this.subgridSize;
        for (let i = 0; i < this.subgridSize; i++) {
            for (let j = 0; j < this.subgridSize; j++) {
                if (board[i + startRow][j + startCol] === num) {
                    return false;
                }
            }
        }

        return true;
    }

    private solve(board: number[][]): boolean {
        const emptySpot = this.findEmptySpot(board);
        if (!emptySpot) {
            return true;
        }

        const [row, col] = emptySpot;

        for (let num of this.numbers) {
            if (this.isValid(board, row, col, num)) {
                board[row][col] = num;

                if (this.solve(board)) {
                    return true;
                }

                board[row][col] = 0;
            }
        }

        return false;
    }

    private findEmptySpot(board: number[][]): [number, number] | null {
        for (let row = 0; row < this.boardSize; row++) {
            for (let col = 0; col < this.boardSize; col++) {
                if (board[row][col] === 0) {
                    return [row, col];
                }
            }
        }
        return null;
    }

    getBoard(): number[][] {
        return this.board;
    }
}

// Uso:
const generator = new SudokuGenerator(9);
const sudokuBoard = generator.getBoard();
console.log("NUEVO SUDOKU",sudokuBoard);
*/
