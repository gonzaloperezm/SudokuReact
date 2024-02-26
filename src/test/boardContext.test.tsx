import { render, cleanup, waitFor,screen } from '@testing-library/react';
import { BoardContext } from '../components/boardContext';
import { describe, test,afterEach, expect } from 'vitest';


import Square from '../components/square';
import userEvent from '@testing-library/user-event';
import { KEYS } from '../models/const/tests';
import {  contenido, fullSudoku } from '../functions/mockData';


import { Modal } from '../components/Modal';

const mockData = contenido;
describe('BoardContext', () => {
    afterEach(() => {
        cleanup();
    });

    
    
   
    test('cambiar el valor de los elementos box',async  () => {
        
        
        
        

        render(
            <BoardContext contenido={mockData} >
                <Square />
            </BoardContext>
        );
        const target = await screen.findByTestId('0,3') as HTMLInputElement;
        
        
       
        userEvent.type(target,"3");
        
        
        
        await waitFor(() => {
            expect(target.value).toBe('3')
        });

       
    });

    test('cambiar el valor de una elemento box para que este rojo',async  () => {
        
        
        
        

        render(
            <BoardContext contenido={mockData} >
                <Square />
            </BoardContext>
        );
        const target = await screen.findByTestId('0,3') as HTMLInputElement;
        
        
       
        userEvent.type(target,"3");
        
        
        
        await waitFor(() => {
            expect(target.className).toBe('rojo')
        });

       
    });

    test('cambiar el color de una elemento box',async  () => {
       
        
        
        

        render(
            <BoardContext contenido={mockData} >
                <Square />
            </BoardContext>
        );
        const target = await screen.findByTestId('0,3') as HTMLInputElement;
        
        
       
        userEvent.type(target,"3");
        userEvent.type(target,KEYS.del);
        userEvent.type(target,"2");
        const target2 = await screen.findByTestId('0,1') as HTMLInputElement;
        
        
        
        await waitFor(() => {
            expect(target2.className).toBe('white')
        });

       
    });
    
    
    
    

});


describe("testeo modal", async ()=>{
    afterEach(() => {
        cleanup();
    });
    test('Testear si ha abierto el modal',async  () => {
        
        render(
            <>
            <BoardContext contenido={fullSudoku} >
                <Square />
            </BoardContext>
            <Modal />
            </>
        );
      
        
        
        const modal = screen.findByText("Felicitaciones");
        
        await waitFor(() => {
            setTimeout(()=>{expect(modal).toBeVisible();},500)
            
        });
        

        
       
       
    });


    /* test("useImperativeHandle devuelve las funciones a la ref", async ()=>{
        const ref = useModal();
        //mockear un contexto con una ref para luego pasarsela a al modal para que la decore
        render(
            <BoardContext contenido={mockData} >
               <Modal ref={ref.modalRef}/>
            </BoardContext>
        )

        
        const myRef = useRef();
    
       
        await waitFor(() => {
            
            expect(myRef.current?.showModal()).toBeDefined();
            expect(myRef.current?.hideModal()).toBeDefined();
        });

    }) */
});

