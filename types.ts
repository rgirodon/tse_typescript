let firstname: string = "Rémy";

let age: number = 43;

let hasKids: boolean = true;

let skills: string[] = ["Java", "NoSQL", "WebDev"]; 

console.log(`${firstname} is ${age} years old. Does he have kids ? ${hasKids}`);

skills.forEach(
    (item) => {
        console.log(item);
    }
);

/*
age = "Hello";

firstname = 58;
*/


function greet(name: string): string {
    
    return("Hello, " + name.toUpperCase() + "!!");
}

let welcomeMessage: string = greet(firstname);

console.log(welcomeMessage);

/*
age = greet('Arturo');
*/


function sum(a: number, b?: number, c?: number): number {

    let result: number = a;

    if (b) {

        result += b;
    }

    if (c) {

        result += c;
    }

    return result;
}

console.log(sum(1, 2, 3));

console.log(sum(1, 2));

console.log(sum(1));


function printId(id: number | string):string {

    return("Your ID is: " + id);
}

console.log(printId(36));

console.log(printId("BZ26"));


function printCoord(pt: { x: number; y: number }): void {
    
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

let myPoint = { 
    x: 3,
    y: 7
};

printCoord(myPoint);

// printCoord({ abcisse: 3, ordonnee: 7 });


interface IPoint {
    x: number;
    y: number;
}

function printCoordWithInterface(pt: IPoint): void {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
   
printCoordWithInterface({ x: 100, y: 150 });
//printCoordWithInterface({ abcisse: 3, ordonnee: 7 });


type TSpacePoint = {
    x: number;
    y: number;
    z: number;
}

function printSpaceCoord(pt: TSpacePoint): void {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
    console.log("The coordinate's z value is " + pt.z);
}

printSpaceCoord({ x: 100, y: 10, z: 200 });