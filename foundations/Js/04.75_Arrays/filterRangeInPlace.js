function filterRangeInPlace(arr, a, b) {
    arr.forEach((e, i) => { 
        if(e <= a || e >= b)
            arr.splice(i, 1);
    })
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert( arr ); // [3, 1]
