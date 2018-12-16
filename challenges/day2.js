var fs = require("fs");
let data = fs.readFileSync("../input/input02.txt").toString();
let ids = data.split("\n");

let doubleSet = new Set();
let tripleSet = new Set();

for(let i = 0; i < ids.length; i++) {
    let charTable = {};
    for(let c of ids[i]) {
        if(!charTable[c]) {
            charTable[c] = 1;
        } else {
            charTable[c]++;
        }
    }
    for(let key in charTable) {
        if(charTable.hasOwnProperty(key)) {
            if(charTable[key] == 2) {
                doubleSet.add(ids[i]);
            }
            if(charTable[key] == 3) {
                tripleSet.add(ids[i]);
            }
        }
    }
}

let checksum = doubleSet.size * tripleSet.size;
console.log(checksum);