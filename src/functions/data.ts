import { createBoard } from "./function"


let row1 = [5, 3, null, null, 7, null, null, null, null]
let row2 = [6, null, null, 1, 9, 5, null, null, null]
let row3 = [null, 9, 8, null, null, null, null, 6, null]
let row4 = [8, null, null, null, 6, null, null, null, 3]
let row5 = [4, null, null, 8, null, 3, null, null, 1]
let row6 = [7, null, null, null, 2, null, null, null, 6]
let row7 = [null, 6, null, null, null, null, 2, 8, null]
let row8 = [null, null, null, 4, 1, 9, null, null, 5]
let row9 = [null, null, null, null, 8, null, null, 7, 9]

export const contenido = [row1, row2, row3, row4, row5, row6, row7, row8, row9]



 row1 = [5, 3, null, null, 7, null, 7, null, null]
 row2 = [6, null, null, 1, 9, 5, null, null, null]
 row3 = [null, 9, 8, null, null, null, null, 6, null]
 row4 = [8, null, null, null, 6, null, null, null, 3]
 row5 = [4, 4, null, 8, null, 3, null, null, 1]
 row6 = [7, null, null, null, 2, null, null, null, 6]
 row7 = [null, 6, null, null, null, null, 2, 8, null]
 row8 = [null, null, null, 4, 1, 9, null, null, 5]
 row9 = [null, null, null, null, 8, null, null, 7, 9]

const contenidoFilaMal = [row1, row2, row3, row4, row5, row6, row7, row8, row9]


row1 = [5, 3, null, null, 7, null, null, null, null]
 row2 = [6, null, null, 1, 9, 5, null, null, null]
 row3 = [6, 9, 8, null, null, null, null, 6, 3]
 row4 = [8, null, null, null, 6, null, null, null, 3]
 row5 = [4, null, null, 8, null, 3, null, null, 1]
 row6 = [7, null, null, null, 2, null, null, null, 6]
 row7 = [null, 6, null, null, null, null, 2, 8, null]
 row8 = [null, null, null, 4, 1, 9, null, null, 5]
 row9 = [null, null, null, null, 8, null, null, 7, 9]

const contenidoColumnaMal = [row1, row2, row3, row4, row5, row6, row7, row8, row9]


row1 = [5, 3, null, null, 7, null, null, null, null]
 row2 = [6, null, null, 1, 9, 5, null, null, null]
 row3 = [6, 9, 8, null, null, null, null, 6, null]
 row4 = [8, null, null, null, 6, null, null, null, 3]
 row5 = [4, null, null, 8, null, 3, null, null, 1]
 row6 = [7, null, null, null, 2, null, null, null, 6]
 row7 = [null, 6, null, null, null, null, 2, 8, null]
 row8 = [null, null, null, 4, 1, 9, null, null, 5]
 row9 = [null, null, null, null, 8, null, null, 7, 9]

const contenidoCuadranteMal = [row1, row2, row3, row4, row5, row6, row7, row8, row9]

 row1 = [5, 3, 3, null, 7, null, null, null, null]
 row2 = [6, null, null, 1, 9, 5, null, null, null]
 row3 = [null, 9, 8, null, null, null, null, 6, null]
 row4 = [8, null, null, null, 6, null, null, null, 3]
 row5 = [4, null, null, 8, null, 3, null, null, 1]
 row6 = [7, null, null, null, 2, null, null, null, 6]
 row7 = [null, 6, null, null, null, null, 2, 8, null]
 row8 = [null, null, null, 4, 1, 9, null, null, 5]
 row9 = [null, null, null, null, 8, null, null, 7, 9]

const contenidoMal = [row1, row2, row3, row4, row5, row6, row7, row8, row9]

export const correctContent = createBoard(contenido)

export const wrongRowContent = createBoard(contenidoFilaMal)

export const wrongColumnContent = createBoard(contenidoColumnaMal)

export const wrongBoxContent = createBoard(contenidoCuadranteMal)

export const wrongContent = createBoard(contenidoMal)