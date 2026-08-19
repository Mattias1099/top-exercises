function add7(number) {
    return number + 7;
}

console.log(add7(10));

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

console.log(multiply(3, 2));

function capitalize(word) {
    let firstLetter = word.charAt(0).toUpperCase();
    let rest = word.slice(1).toLowerCase();
    return firstLetter + rest;
}

console.log(capitalize("abcd"));
console.log(capitalize("aBCD"));
console.log(capitalize("ABCD"));

function lastLetter(word) {
    return word.charAt(word.length - 1);
}

console.log(lastLetter("abcd"));