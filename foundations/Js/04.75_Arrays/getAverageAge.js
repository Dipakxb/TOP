let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

const getAverageAge = (arr) =>{
    return arr.reduce((acc , curr) => acc + curr.age / arr.length, 0);
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28