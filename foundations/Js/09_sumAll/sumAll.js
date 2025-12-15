const sumAll = function(a, b) {
    arr = [a, b];
    if(typeof(a) == "number" && typeof(b) == 'number'){
        if(a % 1 === 0 && b % 1 === 0){
            if(a > 0 && b > 0){
                if(a>b){
                    arr = [b, a]
                }
                let smaller = arr[0];
                let greater = arr[1];
                let Num = 0; 
                for(let i = smaller; i <= greater; i++){
                    Num += i;
                }
                return Num
            }
        }
    }
    return 'ERROR'
};

console.log(sumAll(5, 1))

// Do not edit below this line
module.exports = sumAll;
