var fs = require("fs");
let data = fs.readFileSync("../input/input02.txt").toString();
let ids = data.split("\n");

for(let i = 0; i < ids.length; i++) {
    for(let j = 1; j < ids.length; j++) {
        if(ids[i].length !== ids[j].length) {
            continue;
        }
        let differenceCount = 0;
        let differenceIndex = -1;
        for(let k = 0; k < ids[i].length; k++) {
            if(ids[i][k] !== ids[j][k]) {
                differenceCount++;
                differenceIndex = k;
            }
        }
        if(differenceCount === 1) {
            let answer =  ids[i].slice(0, differenceIndex) + ids[i].slice(differenceIndex + 1);
            console.log(answer);
            return answer;
        }
    }
}