
// .sort()
// .filter()
// .find()
// .map()
// .reduce()

// clone an array
// shuffle and array




// const names = ["Johan", "Fredrik", "Saman", "Alicia", "Maja", "Elliot"];
// console.log("Names in chaos:", names);

// names.sort();
// console.log("names in proper order:", names);

// names.reverse();
// console.log("names in reverse order:", names);

// const names2 = ["Johan", "Fredrik", "Saman", "Alicia", "Maja", "Elliot"];

// console.log(names2.sort().reverse());

// console.log(names2);



// const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 7, 33, 52, 103 ];

// console.log("numbers in chaos:", numbers);

// console.log("numbers sorted badly:", numbers.sort());



// numbers.sort( (a, b) => {

//     if (a < b){
//         return -1;
//     }

//     if (a > b) {
//         return 1;
//     }
//     return 0;
// })
// */


//  kortare sätt att skriva samma sak på 
// numbers.sort( (a, b) => a - b);

//  numbers.sort( (a, b) => {
//     return a - b;
// })


//console.log("numbers in proper order:", numbers)


// const students = [
//     {
//         name: "Johan",
//         points: 1337,
//     },
//     {
//         name: "Saman",
//         points: 3,
//     },
//     {
//         name: "Alicia",
//         points: 42,
//     },
//     {
//         name: "Elliot",
//         points: 88,
//     },
//     {
//         name: "Maja",
//         points: 35,
//     },
// ];

// console.log("unsorted object:",students);




// LOOOOONG WAY 
// students.sort( (a, b) => {
	
// 	if (a.points < b.points) {
// 		return -1;
// 	// }

	
// 	if (a.points > b.points) {
// 		return 1;
// 	}

	
// 	return 0;
// } );



// short way
// students.sort( (a, b) => a.points - b.points);

// console.log("proper sorted:", students);


// let namn = "harald"
// console.log(namn.charCodeAt(1));

//const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 7, 33, 52, 103 ];

//push all numbers in to an array
// const largeNumbers = []
// numbers.forEach(num => {
//     if (num >= 25) {
//         largeNumbers.push(num)
//     }
// })




//LOOOOOONG
//filter out all numbers >= 25
// const largeNumbers = numbers.filter( (num) => {
//     if (num > 25){
//         return true
//     } else {
//         return false 
//     }
// })

// const lowNumbers = numbers.filter( (num) => {
//     if (num < 25) {
//         return true
//     } else {
//         return false 
//     }
// })


//============SHORT


// const largeNumbers = numbers.filter( num => {
//     return (num >= 25);
// });

// const largeNumbers = numbers.filter(num => num >= 25);

// const lowNumbers = numbers.filter(num => num <= 25);

// console.log(largeNumbers);
// console.log(lowNumbers);

// const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 7, 33, 52, 103 ];

// const largeNumbers = numbers.filter(num => num >= 25);
// const firstLargeNumbers = numbers.find(num => num >= 25);

// console.log(firstLargeNumbers);

// const students = [
//    {
//          name: "Johan",
//          points: 1337,
//      },
//      {
//         name: "Saman",
//          points: 3,
//      },
//      {
//          name: "Alicia",
//         points: 42,
//      },
//      {
//          name: "Elliot",
//          points: 88,
//      },
//      {
//               name: "Maja",
//          points: 35,
//      },
//  ];

//  const find = students.find( s => s.points >= 5 );
//  console.log(find);

