'use strict';
var correctAnswers = 0;

// ask user for his/her name
var userName = prompt('Introduce yourself !');
alert('Welcome ' + userName + ' let\'s see how much do you know about me ')

// ask user 5 questions about me and convert it to lower case

var nameQuestion = prompt('Is my name Yazan? (Please answer Yes or No)').toLocaleLowerCase();
if (nameQuestion === 'yes') {     // responde to user my name question answer
    // console.log('Bingo!');
    alert('Bingo!');
    correctAnswers++
} else if (nameQuestion === 'no') {
    // console.log('You have no least idea about me');
    alert('You have no least idea about me');
} else {
    // console.log('Please answer within Yes or no, refresh page');
    alert('Please answer within Yes or no, refresh page');
}

var jobQuestion = prompt('Am I a future javascript engineer? (Please answer Yes or No)').toLocaleLowerCase();
if (jobQuestion === 'yes') {      // responde to user my job question answer
    // console.log('Good job, extra point!');
    alert('Good job, extra point!');
    correctAnswers++
} else if (jobQuestion === 'no') {
    // console.log('Nice try!');
    alert('Nice try!');
} else {
    // console.log('Please answer within Yes or no, refresh page');
    alert('Please answer within Yes or no, refresh page');
}

var powerQuestion = prompt('Is my special power I can Fly? (Please answer Yes or No)').toLocaleLowerCase();
if (powerQuestion === 'yes') {      // responde to user my power question answer
    console.log('Humans don\'t literally fly!, but they can make things fly');
    alert('Humans don\'t literally fly!, but they can make things fly');
} else if (powerQuestion === 'no') {
    // console.log('Common sense, correct!');
    alert('Common sense, correct!');
    correctAnswers++
} else {
    // console.log('Please answer within Yes or no, refresh page');
    alert('Please answer within Yes or no, refresh page');
}

var favFoodQuestion = prompt('Do I love food so much ? (Please answer Yes or No)').toLocaleLowerCase();
if (favFoodQuestion === 'yes') {     // responde to user my name food answert
    // console.log('Good job, extra point!');
    alert('Good job, extra point!');
    correctAnswers++
} else if (favFoodQuestion === 'no') {
    // console.log('Nice try');
    alert('Nice try');
} else {
    // console.log('Please answer within Yes or no, refresh page');
    alert('Please answer within Yes or no, refresh page');
}

var placeQuestion = prompt('Do I live on Mars?(Please answer Yes or No)').toLocaleLowerCase();
if (placeQuestion === 'yes') {      // responde to user my home place question answer
    // console.log('Sadly no, you lose a point');
    alert('Sadly no, you lose a point');
} else if (placeQuestion === 'no') {
    // console.log('Good job, extra point!');
    alert('Good job, extra point!');
    correctAnswers++
} else {
    // console.log('Please answer within Yes or no, refresh page');
    alert('Please answer within Yes or no, refresh page');
}
// final message
alert("Nice to meet you " + userName + ' I hope you enjoy your time in our website');
// Question 6 guess the number
for (var i = 0; i < 4; i++) {
    var userNumberGuess = Number(prompt('Guess my favourite movie number from 1 to 10 in the list, you have 4 chances'));
    if (userNumberGuess > 5) {
        alert('too high');
    } else if (userNumberGuess < 5) {
        alert('too low');
    } else if (userNumberGuess === 5) {
        alert('correct, it\'s Primal Fear');
        correctAnswers++
        break;
    } else {
        console.log('something wrong in my code');
    }
}

// question 7 multi correct answers
var correctAnswersList = [25, 29, 1, 33, 11, 55, 99];
loop1:
for (var j = 0; j < 6; j++) {
    var userAnswer = prompt('Guess one of correct answers from 1 to 100, you have 6 attempts');
    for (var i = 0; i < correctAnswersList.length; i++) {
        if (Number(userAnswer) === correctAnswersList[i]) {
            alert('You got the answer Correct');
            correctAnswers++
            break loop1;
        }
    }
}

alert('Correct answers are: ' + correctAnswersList);  // replay to user the correct answers list

alert('Your correct score is ' + correctAnswers + ' and total questions are 7');
