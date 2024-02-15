import {render,screen }from  '@testing-library/react';
import Box from './box';
import { Casilla } from './boardContext';
import { describe, test } from 'vitest';


describe('box',()=>{
    test("testeo value",()=>{
        const num = new Casilla("1",0,0,false,5,"blue")
        const component = render(<Box number={num} />)

        const value = component.findByRole('valueNumber')
       expect(value).toBe(5)

    })


})
    