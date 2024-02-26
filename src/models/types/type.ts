

import { Casilla } from "../classes/casilla";
export interface Props {
    
    rows: Casilla[];
  }

  export type tablero = Casilla[][];

  export interface RefContextProps {
    modalRef: React.RefObject<ModalRef>

  } 
  export type ModalRef = {
    showModal(): void,
    hideModal(): void
  }
  export type matriz = (number | null)[][]
  

  export type Contexto ={
    data: tablero,
    changeValue:(x: Casilla, i: (number | null),data: tablero) => void,
    changeColor: (id: Array<string>, color: string,data: tablero) => void,
    RefForModal: RefContextProps | undefined
  }