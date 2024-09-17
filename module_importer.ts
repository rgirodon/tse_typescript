import { squareTwo, phi } from './module_named_exporter';

import absoluteValue from './module_default_exporter';

console.log(absoluteValue(-squareTwo));

console.log(absoluteValue(phi));

import { Cat, Dog } from './module_type_exporter';

function showAnimal(animal: Cat | Dog): void {

    console.log(`This animal was born in : ${ animal.yearOfBirth }`);
}

let myCat: Cat = { 
    color: 'Black',
    yearOfBirth: 2020
};

let myDog: Dog = {
    race: "Boston Terrier",
    yearOfBirth: 2022
}

showAnimal(myCat);

showAnimal(myDog);