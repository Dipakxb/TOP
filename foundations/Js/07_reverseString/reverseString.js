const reverseString = function(args) {
    if(typeof args !== "string" ){
        return
    }
    let reverseString = "";
    for(let i = args.length-1 ; i > -1 ; i--) {
        reverseString += args[i];
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
