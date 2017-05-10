'use strict';

var name = prompt('Is my name Andy? Y/N');
var ans1 = name.toLowerCase();

if (ans1 === 'y'){
  var correct1 = true;
}else {
  var correct1 = false;
};

console.log('Name correct? ' + correct1);

var age = prompt('Am I turning 25 on Thursday the 11th? Y/N');
var ans2 = age.toLowerCase();

if (ans2 === 'y'){
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

var born = prompt('Was I born in Seattle? Y/N');
var ans3 = born.toLowerCase();

if (ans3 === 'n'){
  var correct3 = true;
}else {
  var correct3 = false;
};

console.log('Born correct? ' + correct3);

var school = prompt('Did I go to school at Whitman? Y/N');
var ans4 = school.toLowerCase();

if (ans4 === 'y'){
  var correct4 = true;
}else {
  var correct4 = false;
};

console.log('School correct? ' + correct4);

var food = prompt('Is my favorite food tacos? Y/N');
var ans5 = food.toLowerCase();

if (ans5 === 'n'){
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
