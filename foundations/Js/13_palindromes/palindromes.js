const palindromes = function (str) {
    const specialCases = "!,. ";
    for(let i of str){
        if(specialCases.includes(i)){
            str = str.slice(0, str.indexOf(i)) + str.slice(str.indexOf(i)+1, str.length);
        }
    }
    let reverseStr = str.split('').reverse().join('');
    return reverseStr.toLowerCase() === str.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
