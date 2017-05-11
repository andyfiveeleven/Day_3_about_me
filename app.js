'use strict';

var userResponse = ['y', 'yes', 'n', 'no'];
var answerKey = [true, true, false, true, false];

var questions = [
  'Is my name Andy',
  'Am I turning 25 on Thursday the 11th',
  'Was I born in Seattle',
  'Did I go to school at Whitman',
  'Do I like tacos'
];

var userAnswers = [];
var correctCounter = 0;

function trueFalseforGameOne(userInput) {
  if (userInput === 'yes' || userInput === 'y') {
    userAnswers.push(true);
  } else if (userInput === 'no' || userInput === 'n') {
    userAnswers.push(false);
  } else {
    alert('You can\'t read!');
    userAnswers.push(0);
  }
}

for (var i = 0; i < questions.length; i++) {
  var userInput = prompt(questions[i] + ' Y/N?').toLowerCase();
  console.log('user response:', userInput);

  trueFalseforGameOne(userInput);
  console.log('user answers array = ', userAnswers);
}

for (var i = 0; i < userAnswers.length; i++) {
  if (userAnswers[i] === answerKey[i]) {
    correctCounter++;
  }
}

alert('You got ' + correctCounter + ' answers correct!');

//number guessing game

var numberGuess;
var number = Math.floor(Math.random() * 10) + 1;
var counter = 1 ;
var tries = 3;

while(numberGuess !== number && counter <= 3){
  numberGuess = parseInt(prompt(userName + ', I\'m thinking of a number between one and ten, it\'s random, what do you think?'));

  if (number < numberGuess) {
    alert('you guessed too high, try again!');
    counter++;
    tries--;
    alert('You have ' + tries + ' tries left');
  }else if (number > numberGuess) {
    alert('you guessed too low, try again!');
    counter++;
    tries--;
    alert('You have ' + tries + ' tries left');
  }else if(number === isNaN){
    alert('that\'s not a number dumbass, try again,');
    counter++;
    tries--;
    alert('You have ' + tries + ' tries left');
  }
}

console.log('counter: ', counter);

var correct6;
if (numberGuess !== number){
  alert('Fail, you ran out of tries');
}else{
  alert('Wow! You got it right! And you had ' + tries + ' tries left');
  correct6 = true;
  correctAnswers.push(correct6);
}

//array guessing game
var hobbies = ['carpentry', 'cocktails', 'cooking', 'camping', 'code'];
var hobbiesCounter = 0;

while(hobbiesCounter < 6){
  var hobbiesAnswer = prompt('Can you guess one of my hobbies?').toLowerCase();
  for(var i=0; i<hobbies.length; i++){
    console.log(hobbies);
    if(hobbiesAnswer === hobbies[i]){
      alert('Well done! I love ' + hobbiesAnswer);
      hobbiesCounter = 6;
      var correct7=true;
      correctAnswers.push(correct7);
      break;
    }
  }
  hobbiesCounter++;
  if(hobbiesCounter < 6){
    alert('try again');
  }
  console.log(hobbiesAnswer);
  console.log(hobbiesCounter);
}

console.log(correctAnswers);

var numberCorrect = correctAnswers.length;

alert('Thanks for taking my quiz ' + userName + '. You got ' + numberCorrect + ' out of 7 correct answers!');
