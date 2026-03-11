const findTheOldest = function(arr) {
    let winner = {};
    for(let i =0; i < arr.length; i++){
        const thisYear = new Date();
        let current = arr[i]
        current.yearOfDeath = current.yearOfDeath ? current.yearOfDeath : thisYear.getFullYear();
        let currentAge = current.yearOfDeath - current.yearOfBirth;
        let next = arr[i + 1]
        if(next === undefined){
            return winner;
        }
        winner = current;
        next.yearOfDeath = next.yearOfDeath ? next.yearOfDeath : thisYear.getFullYear();
        let nextAge = next.yearOfDeath - next.yearOfBirth;
        if(currentAge < nextAge){
            winner = next;
        }else {
            winner = current;
            break;
        }
    }
    return winner
};

// Do not edit below this line
module.exports = findTheOldest;
