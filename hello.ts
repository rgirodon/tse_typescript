import type { Point } from './Point';

function greet(person: string, date: Date) {

    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet('Rémy Girodon', new Date());

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
} 

printCoord({ x: 100, y: 10 });