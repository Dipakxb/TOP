const repeatString = function(args, times) {
    if(times < 0){
        return args;
    }        
    let repeatingString = "";
    for(let x= 0 ; x < times; x++) {
        repeatingString += args;
    }
    return repeatingString;
};

// Do not edit below this line
module.exports = repeatString;
