
import { Casilla } from "../components/boardContext";
import { contenido, correctContent, wrongBoxContent, wrongColumnContent, wrongContent, wrongRowContent } from "./data";
import { checkAllSquares, checkBoard, checkColumn, checkRow, checkSquare, createBoard } from "./function";

import { expect, expectTypeOf, test } from 'vitest';



test('comprobar si hay 2 valores iguales en las filas de una matriz', ()=>{
    expect(checkRow(correctContent)).toBe(false)
    expect(checkRow(wrongRowContent)).toStrictEqual(['0,4','0,6','4,0','4,1'])
})

test('comprobar si hay 2 valores iguales en las columnas de una matriz',()=>{
    expect(checkColumn(correctContent)).toBe(false)
    expect(checkColumn(wrongColumnContent)).toStrictEqual(['1,0','2,0','2,8','3,8'])
})

test('comprobar si hay 2 valores iguales en los cuadrantes(3x3) de una matriz(9x9)',()=>{
    expect(checkAllSquares(correctContent)).toBe(false)
    expect(checkAllSquares(wrongBoxContent)).toStrictEqual(['1,0','2,0'])
})

test('comprobar si hay 2 valores iguales en un cuadrante 3x3',()=>{
    expect(checkSquare(0,0,correctContent)).toBe(false)
    expect(checkSquare(0,0,wrongBoxContent)).toStrictEqual(['1,0','2,0'])
})

test('comprobar que un sudoku sea correcto',()=>{
    expect(checkBoard(correctContent)).toBe(false)
    expect(checkBoard(wrongContent)).toStrictEqual(['0,1','0,2'])
})

test('completar una matriz con objetos Casilla',()=>{
    let content = createBoard(contenido)
    expect(content).toHaveLength(9)
    expect(content).toBeInstanceOf(Array<Array<Casilla>>)
    expect(content[0]).toHaveLength(9)
    expect(content[0]).toBeInstanceOf(Array<Casilla>)
    expectTypeOf(content).toEqualTypeOf<Array<Array<Casilla>>>
})



