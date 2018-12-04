var fs = require("fs");
let data = fs.readFileSync('input/input01.txt').toString();
let copy = data;
let operators = copy.split(/[\n\r0-9]+/);
operators = operators.filter((op) => op.length > 0);
let numbers = copy.split(/[\n\r+-]/);
numbers = numbers.filter((number) => number.length > 0);


let frequency = 0;

for(let i = 0; i < operators.length; i++) {
    let op = operators[i];
    let num = parseInt(numbers[i]);

    if(op == '+') {
        frequency += num;
    } else if(op == '-') {
        frequency -= num;
    }
}

console.log(frequency);



