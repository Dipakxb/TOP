function capitalize(str) {
    const ls = str.toLowerCase();
    return ls[0].toUpperCase().concat(ls.slice(1))
}

console.log(capitalize("Abcd"));
console.log(capitalize("ABCD"));
console.log(capitalize("abcd"));
console.log(capitalize("ABcd"));
