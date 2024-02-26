import { getSudoku, setLevel } from "./function";



async function obtenerMatrizFacil() {
    try {
        const matrizApi = await getSudoku();
        const matrizFacil = await setLevel(matrizApi, 20);
        console.log("nuevamatriz", matrizFacil);
        return matrizFacil;
    } catch (error) {
        console.error('Error al obtener la matriz fácil del sudoku:', error);
        throw error;
    }
}

export default obtenerMatrizFacil;