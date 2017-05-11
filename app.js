'use strict';

var name = prompt('Is my name Andy? Y/N').toLowerCase();

if (name === 'y' || name === 'yes'){
  var correct1 = true;
}else {
  var correct1 = false;
};

console.log('Name correct? ' + correct1);


var age = prompt('Am I turning 25 on Thursday the 11th? Y/N').toLowerCase();

if (age === 'y' || age === 'yes'){
  var correct2 = true;
}else {
  var correct2 = false;
};

console.log('Age correct? ' + correct2);

if (correct1 && correct2){
  alert('Phew! My identity is intact! You got me pegged!');
}else {
  alert('You still have a bit to learn about me, my name is Andy and i\'ll soon be 25!');
};

alert('Ok, let\s make this a bit harder now.');


var born = prompt('Was I born in Seattle? Y/N').toLowerCase();

if (born === 'n' || born === 'no'){
  var correct3 = true;
}else {
  var correct3 = false;
};

console.log('Born correct? ' + correct3);


var school = prompt('Did I go to school at Whitman? Y/N').toLowerCase();

if (school === 'y' || school === 'yes'){
  var correct4 = true;
}else {
  var correct4 = false;
};

console.log('School correct? ' + correct4);


var food = prompt('Is my favorite food tacos? Y/N').toLowerCase;

if (food === 'n' || food === 'no'){
  var correct5 = true;
}else{
  var correct5 = false;
};

console.log('Food correct? ' + correct5);

if (correct3 && correct4 && correct5){
  alert('Let\'s see how you did with those harder questions....  You were right! I was born in Minneapolis, I went to school at Whitman, and I like Whiskey just slightly more than tacos!');
}else{
  alert('Let\'s see how you did with those harder questions.... You got some things wrong, just to review, I was born in Minneapolis, I went to school at Whitman, and I like Whiskey just slightly more than tacos!' );
};

if (correct1 && correct2 && correct3 && correct4 && correct5){
  alert('Wow! You know a lot about me! That\'s kinda creepy!');
}else if (correct1 || correct2) {
  alert('Well, at least you got some of the basics right....');
}else {
  alert('You didn\'t get much right... Better luck next time bud....');
};

var userName = prompt('Now that you know who I am, what\'s your name?');

alert('Okay ' + userName + ', now that we know about eachother, let\'s play a game');

//number guessing game

var numberGuess;
var number = Math.floor(Math.random() * 10) + 1;
var counter = 1 ;
var tries = 3;

while(numberGuess !== number && counter <= 3){
  var numberGuess = parseInt(prompt(userName + ', I\'m thinking of a number between one and ten, it\'s random, what do you think?'));

  if (number < numberGuess) {
    alert('you guessed too high, try again!');
    counter++;
    alert('You have ' + tries + ' tries left');
    tries--;
  }else if (number > numberGuess) {
    alert('you guessed too low, try again!');
    tries = tries - counter;
    counter++;
    alert('You have ' + tries + ' tries left');
    tries--
  }else if(number === NaN){
    alert('that\'s not a number dumbass, try again');
  }
}

console.log('counter: ', counter);

if (numberGuess !== number){
  alert('Fail, you ran out of tries');
}else{
  alert('Wow! You got it right! And you had ' + tries + ' tries left');
  var correct6 = true
};

//array guessing game
var hobbies = ['carpentry', 'cocktails', 'cooking', 'camping', 'code'];
var hobbiesCounter = 0

while(hobbiesCounter < 6){
  var hobbiesAnswer = prompt('Can you guess one of my hobbies?').toLowerCase();
  for(var i=0; i<hobbies.length; i++){
    console.log(hobbies);
    if(hobbiesAnswer === hobbies[i]){
      alert('Well done! I love ' + hobbiesAnswer);
      hobbiesCounter = 6
      var correct7=true;
      break;
    }
  }
  hobbiesCounter++
  if(hobbiesCounter < 6){
    alert('try again');
  }
console.log(hobbiesAnswer);
console.log(hobbiesCounter);
}

if(hobbiesCounter >= 6){
  alert('out of tries');
}

var answers = [correct1, correct2, correct3, correct4, correct5, correct6, correct7];

console.log(answers)
