/* let username = " ";
let msg;

if (username) {
    msg = `welcome ${username}`;
}
else {
    msg = "Welcome, anonomus visitor";
}

console.log(msg);

*/
/*
let username = "johan"

let msg = (username) ? "You have a name!" 
: "You have no name";

console.log(msg);
*/

/*
function greetUser(name, time) {
    console.log(`good ${time}, ${name}`);
}


let time = "evening"
let name = "Pelle"
greetUser(name, time);
*/


/*
const greetUser = function(user = "ananymus", time = "day") {
    console.log(`Good ${time}, ${user}`);
}

greetUser("johan", "morning");

greetUser();
*/

/*
const calcbox = function(width, height){
    const circ = width * 2 + height * 2;
    return circ;
}

 const res = calcbox(20,40);
 console.log(res);


 const calcBoxArea = function(width, height){
    return width * 2 + height * 2;
 }

 const des = calcBoxArea(20, 40);
 console.log(des); 
 
 const calcCirc = (radius) => {
    return 3.14 * radius ** 2;
 }
*/

/*
const nagUser = (txt) => {
    alert(txt);
}

const log = (txt) => {
    console.log(txt);
}

const makeMoreInteresting = (txt, action) => {
    let interesting = txt + "!!!!!!!!!!";
    action(interesting);
}

makeMoreInteresting("this is so much fun", log);
*/

/*
CALLBACKS

let students = ["johan", "pelle", "kajsa", "maja", "olle",]



for (let i = 0; i < student.length; i++) {
    console.log(i)
}



const showStudentName = function(item, index){
    console.log(`students at ${index} ${item}`);
}

students.forEach((hello, number, array) => {
    console.log(`students at index , ${array}, ${hello}, ${number}`);
} )

*/
/*

let tal = Math.ceil(Math.random() *10);



console.log(Math.round(tal));
console.log(Math.ceil(tal));
console.log(Math.floor(tal));
console.log(Math.random(tal));



console.log(Math.random(tal) + Math.floor(tal));

console.log(Math.random(tal) * 10)

let talet = Math.random(tal) * 10;

console.log(talet.floor());

*/




/*
console.log(Math.ceil(Math.random() *10))

const getRandomNumber = (max = 10) => {
    return console.log(Math.ceil(Math.random() * max))
}

getRandomNumber(100);


let answer = prompt("Please enter something");
console.log("you answer was:", answer);
*/

/*
function guessTheNumber(){
    const getRandomNumber = (max = 10) => {
        return Math.ceil( Math.random() * max );
    }

    let number = parseInt(prompt('Guess a number between 1 and 10'));

    while(number !== getRandomNumber){
        number === parseInt(prompt('Wrong! Guess a new number between 1 and 10'));
    }
    if(number == getRandomNumber) {
        alert('Congrats! You guessed the correct number');
    }
    else if(number == 0){
        throw new Error('Stopping the game');
    }
}


guessTheNumber();

*/




