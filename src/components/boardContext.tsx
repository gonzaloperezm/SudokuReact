import { createContext, useContext, useEffect, useState } from "react";
import { checkBoard } from "../functions/function";




const BoardData = createContext<Casilla[][]>([])
const ChangeBoard = createContext<(x:Casilla,i:number) => void>(()=>{})
const ChangeColor = createContext<(id: Array<string>,color: string)=>void>(()=>{})

export function useBoardData(){
   return useContext(BoardData)
}



export function useChangeBoard(){
   return useContext(ChangeBoard)
}

export function useChangeColor(){
    return useContext(ChangeColor)
}

export class Casilla{
    id: string;
    x: number;
    y: number;
    defaultValue: boolean;
    value: (number | null)
    color: string
    constructor(id:string, x:number, y:number, defaultValue: boolean, value: (number | null),color: string) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.defaultValue = defaultValue;
        this.value = value;
        this.color= color
    }


}



const row1 = [5,3,null,null,7,null,null,null,null]
    const row2 = [6,null,null,1,9,5,null,null,null]
    const row3 = [null,9,8,null,null,null,null,6,null]
    const row4 = [8,null,null,null,6,null,null,null,3]
    const row5 = [4,null,null,8,null,3,null,null,1]
    const row6 = [7,null,null,null,2,null,null,null,6]
    const row7 = [null,6,null,null,null,null,2,8,null]
    const row8 = [null,null,null,4,1,9,null,null,5]
    const row9 = [null,null,null,null,8,null,null,7,9]

    const contenido = [row1,row2,row3,row4,row5,row6,row7,row8,row9]

    export interface ModalRef{
        showModal():()=>void,
        hideModal():()=>void
      }

export const BoardContext = (props: any)=>{

    let content: Casilla[][] = []

 
    
    for(var i=0; i<9;i++){

        let row: Array<Casilla> = []
        for(var k=0; k<9;k++){
        
            const id = `${i},${k}`;
            const defaultValue = contenido[i][k]?true:false;
            let value = contenido[i][k]
            const x = i;
            const y = k;
            const color = ""
            
           
            const casilla = new Casilla(id,x,y,defaultValue,value,color);
            row.push(casilla)

        }
        content.push(row)

    }   
    const [data, setData] = useState(content)

    function changeBoard(number: Casilla,newValue: number){
        data[number.x][number.y].value = newValue
        setData([...data])
    }

    type id={
        id: string[] | string[][]
    }
    function changeColor(id: id,color:string ){
        for(let i=0;i<data.length;i++){
            for(let k=0;k<data[i].length;k++){
                for(let x=id.length-1;x>=0;x--)
                if(data[i][k].id === id[x]){
                    data[i][k].color =color
                }
            }
        }
    }
    const [winner, setWinner] = useState(false)
    useEffect(() => {
        function checkWin(data: Casilla[][]){
            let winner = true
            data.forEach(rows => {
                rows.forEach(casilla => {
                    if(casilla.value === null || isNaN(casilla.value)){
                        winner = false
                    }else{
                        if(checkBoard(data)){
                            winner = false
                        }
                    }
                });
            });
            console.log("estado winnner: ",winner)
            setWinner(winner)
        }
        checkWin(data);
    }, [data]);

    useEffect(()=>{
        if (winner && props.openModal) {
           props.openModal()
        }
    },[winner])
    return(
        <>
         <BoardData.Provider value={data}>
            <ChangeBoard.Provider value={changeBoard}>
                <ChangeColor.Provider value={changeColor}>
                
                    {props.children}
                    
                </ChangeColor.Provider>
                
            </ChangeBoard.Provider>
            
        </BoardData.Provider>
        
        </>
       
        
    )

}