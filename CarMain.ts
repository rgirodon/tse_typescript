import Car from "./Car";

let c1: Car = new Car("Clio", "Renault", "White", 2024);

let c2: Car = new Car("308", "Peugeot", "Grey", 2024);
c2.start();
c2.accelerate(50);

let c3: Car = new Car("Focus", "Ford", "Red", 2024);
c3.start();
c3.accelerate(100);
c3.decelerate(20);

let cars: Car[] = [c1, c2, c3];

for (let car of cars) {

    car.display();
}
