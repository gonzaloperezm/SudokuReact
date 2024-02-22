
import { RefContextProps } from "../../components/boardContext";
import { Casilla } from "../classes/casilla";
export interface Props {
    
    rows: Casilla[];
  }

  export type tablero = Casilla[][];


  export type matriz = (number | null)[][]
  

  export type Contexto ={
    data: tablero,
    changeValue:(x: Casilla, i: (number | null),data: tablero) => void,
    changeColor: (id: Array<string>, color: string,data: tablero) => void,
    RefForModal: RefContextProps | undefined
  }