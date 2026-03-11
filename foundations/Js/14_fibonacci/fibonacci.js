const fibonacci = function(n) {
    if(n < 0){
        return "OOPS";
    }
    let sequence = [1, 1];
    for(let i = 2; i <= n; i++){
        sequence[i] = sequence[i - 2] + sequence[i - 1]
    }
    return sequence[n-1] ? sequence[n-1] : 0;
};

// Do not edit below this line
module.exports = fibonacci;
