import {pi, squareTwo, phi} from './module_named_exporter';
import absolute from './module_default_exporter';

console.log(absolute(squareTwo));

import { Cat, Dog } from './module_type_exporter';

function showAnimal(animal: Cat | Dog): void {

    console.log(`This animal was born in : ${ animal.yearOfBirth }`);
}

let myCat: Cat = { 
    color: 'Black',
    yearOfBirth: 2020
};

showAnimal(myCat);