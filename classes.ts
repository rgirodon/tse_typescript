/*
interface IPoint {
    x: number;
    y: number;
}
*/

/*
class Point{
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    scale(n: number): void {
        this.x *= n;
        this.y *= n;
    }

    display(): void {
        console.log(`x : ${this.x}, y : ${this.y}`);
    }
}

let p: Point = new Point(10, 5);
p.display();
p.scale(2);
p.display();


class SpacePoint extends Point {

    z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }

    scale(n: number): void {
        super.scale(n);
        this.z *= n;
    }

    display(): void {
        console.log(`x : ${this.x}, y : ${this.y},  z : ${this.z}`);
    }
}

let sp: SpacePoint = new SpacePoint(10, 5, 3);
sp.display();
sp.scale(2);
sp.display();
*/
/*
class Square {
    
    private _length: number = 0;
    
    get length(): number {
      return this._length;
    }

    set length(value: number) {
      this._length = value;
    }

    perimeter(): number {
        return 4*this._length;
    }

    area(): number {
        return this._length*this._length;
    }
}

let s: Square = new Square();
console.log(s.length);
s.length = 10;
console.log(s.length);

console.log(`Perimeter : ${s.perimeter()}`);
console.log(`Area : ${s.area()}`);
*/
/*
class MyClass {
    static x: number = 0;

    static printX(): void {
        console.log(MyClass.x);
    }
}

console.log(MyClass.x);
MyClass.printX();
*/

class Box<T> {
    
    contents: T;

    constructor(value: T) {
        this.contents = value;
    }

    showContent(): T {
        return this.contents;
    }
}

const b = new Box("hello!");
let b_content: string = b.showContent();
console.log(b_content);

const c = new Box(1);
let c_content: number = c.showContent();
console.log(c_content);

const d = new Box(true);
let d_content: boolean = d.showContent();
console.log(d_content);
