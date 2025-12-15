function removeFromArray(arr, ...args) {
    for(argument of args){
        for(let i = arr.length; i > 0; i--){
            if(arr.includes(argument)){
                arr.splice(arr.indexOf(argument), 1);
            }
        }
    }
    return arr
}

module.exports = removeFromArray;
