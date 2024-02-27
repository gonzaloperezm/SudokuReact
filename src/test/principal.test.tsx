import { cleanup, render,screen, waitFor } from "@testing-library/react";
import { Principal } from "../components/principal";
import userEvent from "@testing-library/user-event";
import { setLevel } from "../functions/function";
import { describe,afterEach,test,expect } from "vitest"; 


describe('Testeo comoponente principal', ()=>{

    afterEach(() => {
        cleanup();
    });

    test('checkear si cambia tablero al hacer click en boton', async()=>{

        render(
            <Principal />
        )
            
        const targetFacil = await screen.findByText('Easy') as HTMLButtonElement;
        const targetMedio = await screen.findByText('Medium') as HTMLButtonElement;
        const targetDificil = await screen.findByText('Hard') as HTMLButtonElement;
        userEvent.click(targetFacil)
        userEvent.click(targetMedio)
        userEvent.click(targetDificil)

        await waitFor(() => {
            setTimeout(()=>{expect(setLevel).toHaveBeenCalledWith(expect.any(Array),20)},500)
            setTimeout(()=>{expect(setLevel).toHaveBeenCalledWith(expect.any(Array),40)},500)
            setTimeout(()=>{expect(setLevel).toHaveBeenCalledWith(expect.any(Array),80)},500)
        });
    });

    test('testear si se ejecuta el componente boardContext',async()=>{
        render(
            <Principal />
        )
        const boardContext = setTimeout(()=>{screen.getByTestId('0,0')},500);
        await waitFor(() => {
            setTimeout(()=>{
                expect(boardContext).toBeVisible();
            },500)
             
            
        });
       
    });


    test('testear si al hacer click')

});