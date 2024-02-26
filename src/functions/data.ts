import { getSudoku, setLevel } from "./function";


export const matrizApi = await getSudoku()



const matrizFacil = matrizApi


setLevel(matrizFacil, 20)
console.log("nuevamatriz",matrizFacil)

export { matrizFacil };