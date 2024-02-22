import { cleanup, render,screen, waitFor } from "@testing-library/react";
import { Principal } from "../components/principal";
import userEvent from "@testing-library/user-event";
import { setLevel } from "../functions/function";
import { describe,afterEach,test,expect } from "vitest"; 

describe('Testeo comoponente principa', ()=>{

    afterEach(() => {
        cleanup();
    });

    test('checkear si cambia tablero al hacer click en boton', async()=>{

        render(
            <Principal />
        )

        const targetFacil = await screen.findByText('Facil') as HTMLButtonElement;
        const targetMedio = await screen.findByText('Medio') as HTMLButtonElement;
        const targetDificil = await screen.findByText('Dificil') as HTMLButtonElement;
        userEvent.click(targetFacil)
        userEvent.click(targetMedio)
        userEvent.click(targetDificil)

        await waitFor(() => {
            setTimeout(()=>{expect(setLevel).toHaveBeenCalledWith(expect.any(Array),20)},500)
            setTimeout(()=>{expect(setLevel).toHaveBeenCalledWith(expect.any(Array),40)},500)
            setTimeout(()=>{expect(setLevel).toHaveBeenCalledWith(expect.any(Array),80)},500)
        });
    })

    /*test('testear si se ejecuta el componente boardContext',async()=>{

        const boardContext = await screen.getByTestId('board');
        await waitFor(() => {
            setTimeout(()=>{ expect(boardContext).toBeInTheDocument();},500)
            
        });
       
    })*/

})