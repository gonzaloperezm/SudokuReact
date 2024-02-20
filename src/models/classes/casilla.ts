export class Casilla {
    id: string;
    x: number;
    y: number;
    defaultValue: boolean;
    value: number | null
    color: string
    constructor(id: string, x: number, y: number, defaultValue: boolean, value: number | null, color: string) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.defaultValue = defaultValue;
        this.value = value;
        this.color = color
    }


}