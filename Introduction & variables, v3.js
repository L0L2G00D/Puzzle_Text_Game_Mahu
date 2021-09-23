// Creating all required variables
// This stores whether the loop should be completed
let l = 0;
// This stores the current answer from the player
let answer;
//This stores a answer from the player in number version
let nswer;
//This stores information about the last answer
let panswer;
// This Variable defines What "storyline" the game is currently on, 0 = Neutral, -1 = Bad, 1 = Good. the storyline changes which question you will get. The game has 5 questions, 3 of which depend on answers to previous questions.
let SL;
// This variable Skips all questions if an ending sequence has been achieved
let E = false;
//New introductory sequence
console.log("Welcome to [Insert Game Title]");
console.log("");
console.log("This a text based puzzle game which you will need to figure out the best answer to the questions for you.");
console.log("");
// Code asking for name & checking for numbers
let nam = prompt("What would you like to be called(name)?"); 
while (l == 0) {
  if (isNaN(+nam) !== true) {
    if (nam === '69' || nam === '420') {
      console.log(`( ͡° ͜ʖ ͡°), We don't call people numbers, such as "${nam}" `);
      nam = prompt("What would you like to be called?");
    } else {
      if (nam === '') {
        console.log(`Sorry, We need to call you something`);
        nam = prompt("What would you like to be called?");
      } else {
        console.log(`Sorry, We don't call people numbers, such as "${nam}" `);
        nam = prompt("What would you like to be called?");
      }
    }
  } else {
    l++;
  }
}
const _Name = nam.toLowerCase().trim();

//Reseting Loop breaking
l = 0;
