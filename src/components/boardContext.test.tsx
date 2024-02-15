import {render,screen, fireEvent }from  '@testing-library/react';
import { BoardContext } from './boardContext';
import { describe,test } from 'vitest';






describe('BoardContext',()=>{
    test('cambiar color id',()=>{
        render(<BoardContext />)

        
        
    })
})







/*test('cambiar el color de los elementos con id que se pasa',()=>{
    var elemento1 = new Casilla("1",0,0,true,null,"red")
    var elemento2 = new Casilla("2",0,1,true,null,"white")
    var elemento3 = new Casilla("3",0,2,true,null,"green")
    var elemento4 = new Casilla("4",0,3,true,null,"black")
    const data = [
        [elemento1, elemento2],
        [elemento3, elemento4]
      ];

      const changeColor = useChangeColor()
  
      
      changeColor(["1","3"], 'purple');
  
      
      expect(data[0][0].color).toBe('purple'); // ID '1'
      expect(data[1][0].color).toBe('purple'); // ID '3'
})*/


