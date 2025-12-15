let arr = [5, 2, 1, -10, 8];

function SortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

SortDescending(arr)

alert( arr ); // 8, 5, 2, 1, -10
