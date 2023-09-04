///oppgave 1.///

const elever = ['Artur', 'Magnus', 'Audun', 'Desiree', 'Christer', 'Mari', 'Daniel', 'Ian', 'Bror', 'Isak'];
console.log(elever[0]);
console.log(elever [5]);

elever.pop();

console.log(elever);

console.log(elever[5]);

///oppgave 2.///

const bosses = [{

    firstName: "Ludwig",
    lastName: "The Holy Blade",
    age: 35,
    
}]

const Ludwig = bosses[0]

console.log(Ludwig.firstName);
console.log(Ludwig.age);

///oppgave 3.///

let time = 10;

if (time >=6 == time < 12); {
    console.log('GOD MORN');
} 
else if (time >= 12 == time < 18); {
    console.log ('GOD ETTERMIDDAG')
}
else 
console.log('GOD KVELD DA');



///oppgave 4.///

var number = 1;
var anotherNumber = 2;

function add(n1, n2) {
    return n1 + n2;
}

function multiply(n1, n2) {
    console.log(n1 * n2);
}


var sum = add(number, anotherNumber);
multiply( prompt("Velg et tall"), sum);
