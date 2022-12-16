/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array <--
 */

 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
 console.log("Numbers before shuffling:", numbers);


 //BAD WAY TO SHUFFLE NUMBERS 
// let bad = numbers.sort(() => {
//     return 0.5 - Math.random();
// })
// console.log("Bad way to shuffle numbers", bad)

//GOOD WAY TO SHUFFLE NUBERS 
