var fs = require("fs");
let data = fs.readFileSync("../input/input03.txt").toString();
let claims = data.split("\r\n");

var cloth = {};
var idClaims = {};

for(claim of claims) {
    let claimArray = claim.split(/[\@\:\s]+/);
    let id = claimArray[0];
    idClaims[id] = [];
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
            idClaims[id].push(key);
            if(cloth[key] == undefined) {
                cloth[key] = 1;
            } else {
                cloth[key]++;
            }
        }
    }
}


let keys = Object.keys(idClaims);
for(let i = 0; i < keys.length; i++) {
    let idIsUnique = true;
    idClaims[keys[i]].forEach(element => {
        if(cloth[element] !== 1) {
            idIsUnique = false;
        }
    });
    if(idIsUnique) {
        console.log(`The id with no overlapping fabric is ${keys[i]}`);
    }
}


