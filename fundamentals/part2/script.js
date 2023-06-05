`use strict`;
/*
let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("i can drive")  

function logger() {
    console.log(`my name is yanko`)
}

logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice);


function calcAge1(birthYear) {
    const age = 2037 - birthYear
        ;
    return age
}

const age1 = calcAge1(1991);


const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

const age2 = calcAge2(1991);

console.log(age1, age2);



const calcAge3 = birtYear => 2037 - birtYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirment = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retirement in ${retirement}`;

}

/*
const ret1 = yearUntilRetirment(1991, 'Ivane');
const ret2 = yearUntilRetirment(2002, 'gosho');

console.log(ret1, ret2);


console.log(yearUntilRetirment(1991, 'Ivane'));
console.log(yearUntilRetirment(2002, 'gosho'));
*/

function cutFruit(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruit(apples);
    const orangesPieces = cutFruit(oranges);



    console.log(apples, oranges);
    const juice = `juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 4));