const username = prompt("What is your name?");
alert("Hello, " + username + "!");

const questionOne = prompt(`
    What is the capital of Mexico?
[1] Mexico City
[2] Guadalajara
[3] Monterrey
[4] Tijuana
`); 


if (questionOne === "1") {
    alert("Correct! Mexico City is the capital of Mexico.");
} else {
    alert("Incorrect. The correct answer is Mexico City.");
} 

const questionTwo = prompt(`
    What is the largest planet in our solar system?
[1] Earth
[2] Jupiter
[3] Saturn
[4] Mars
`);

if (questionTwo === "2") {
    alert("Correct! Jupiter is the largest planet in our solar system.");
} else {
    alert("Incorrect. The correct answer is Jupiter.");
}

const questionThree = prompt(`
    What is the chemical symbol for water?
[1] H2O
[2] CO2
[3] O2
[4] NaCl
`);
if (questionThree === "1") {
    alert("Correct! H2O is the chemical symbol for water.");
} else {
    alert("Incorrect. The correct answer is H2O.");
}

//After the quiz, show the user a different message depending on their performance. There should be distinct messages for at least these scenarios:
//The user answered 0 questions correctly.
//The user answered all questions correctly.
//The user answered some questions correctly.

let score = 0;

if (questionOne === "1") {
    score++;
}

if (questionTwo === "2") {
    score++;
}

if (questionThree === "1") {
    score++;
}

if (score === 0) {
    alert("You didn't get any questions correct. Better luck next time!");
} else if (score === 3) {
    alert("Congratulations! You got all questions correct!");
} else {
    alert("You got " + score + " out of 3 questions correct. Not bad!");
}