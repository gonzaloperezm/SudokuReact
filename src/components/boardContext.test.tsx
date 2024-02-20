import { render, cleanup, waitFor,screen } from '@testing-library/react';
import { BoardContext, useBoardData,  useChangeValue } from './boardContext';
import { describe, test, assert,afterEach, expect } from 'vitest';
import { contenido } from '../App';
import { Casilla } from '../models/classes/casilla';
import Square from './square';
import userEvent from '@testing-library/user-event';

describe('BoardContext', () => {
    afterEach(() => {
        cleanup();
    });

    const mockData = contenido;
    
   
    test('cambiar el color de los elementos con id que se pasa',async  () => {
        const user = userEvent.setup();
        
        
        

        render(
            <BoardContext contenido={mockData} openModal={() => { }}>
                <Square />
            </BoardContext>
        );
        const target = await screen.findByTestId('0,3');
        
        
        userEvent.click(target);
        userEvent.keyboard("3")
        console.log("target",target);
        const targetMod = await screen.findByTestId('0,3');
        console.log("target 2",targetMod);
        expect(target).toBe('3')
        await waitFor(() => {
            
        });

       
    });

    /*test('Cambiar el valor de una casilla', async () => {
        const TestComponent = () => {
            const data = useBoardData();
            const changeValue = useChangeValue();
            const casilla = new Casilla("0,0", 0, 0, true, 1, '');

            changeValue(casilla, 7, data);

            assert.strictEqual(data[0][0].value, 7);
            return <></>;
        };

        render(
            <BoardContext contenido={mockData} openModal={() => { }}>
                <TestComponent />
            </BoardContext>
        );

        // Wait for any asynchronous operations to complete
        await waitFor(() => {});

        // The test should end successfully
    });*/
});