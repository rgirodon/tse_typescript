export default class Car {

    model: string;

    brand: string;

    color: string;

    year: number;

    speed: number;

    started: boolean;


    constructor(model: string, brand: string, color: string, year: number) {
        this.started = false;
        this.speed = 0;
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.year = year;
    }

    public start(): void {

        if (!this.started) {
        
            this.started = true;
        }
    }

    public stop(): void {

        if (this.started) {
        
            this.started = false;
        }
    } 

    public accelerate(speed: number): void {

        if (this.started) {

            this.speed += speed;
        }
    }

    public decelerate(speed: number): void {

        if (this.started) {

            this.speed -= speed;
        }
    }

    public display(): void {

        console.log(this.toString());
    } 

    public toString(): string {

        return this.brand + " " + this.model + " [" + this.year + "] {" + this.color + "} <" + this.started + " - " + this.speed + "km/h>"; 
    }
}