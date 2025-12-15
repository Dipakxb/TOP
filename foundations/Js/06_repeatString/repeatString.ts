const repeatString = function(args: string, timesRepeating: number) {
    if(timesRepeating < 0){
        return args;
    }        
    let repeatingString: string = "";
    for(let x= 0 ; x < timesRepeating; x++) {
        repeatingString += args;
    }
    return repeatingString;
};

// Do not edit below this line
module.exports = repeatString;
