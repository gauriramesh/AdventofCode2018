var fs = require("fs");
let data = fs.readFileSync("../input/input03.txt").toString();
let claims = data.split("\r\n");

var cloth = {};
var numOverlapping = 0;

for(claim of claims) {
    let claimArray = claim.split(/[\@\:\s]+/);
    let startingCoords = claimArray[1].split(',');
    let lengths = claimArray[2].split('x');

    let xStart = startingCoords[0];
    let yStart = startingCoords[1];
    let width = lengths[0];
    let height = lengths[1];

    let yBound = parseInt(xStart) + parseInt(width);
    let xBound = parseInt(yStart) + parseInt(height);

    for(let i = xStart; i < yBound; i++) {
        for(let j = yStart; j < xBound; j++) {
            let key = `${i},${j}`;
            if(cloth[key] == undefined) {
                cloth[key] = 1;
            } else {
                cloth[key]++;
            }
        }
    }
}

for(claim in cloth) {
    if(cloth[claim] > 1) {
        numOverlapping++;
    }
}

console.log(`The number of overlapping square inches is ${numOverlapping}.`);


