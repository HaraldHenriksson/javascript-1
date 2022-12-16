const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 7, 33, 52, 103 ];

console.log("numbers:", numbers)

const doubleNumbers = numbers.map(num => {
    return num * 2;
})

console.log(doubleNumbers);

console.log(...numbers);