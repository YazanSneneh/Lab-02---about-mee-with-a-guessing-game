'use strict';
var correctAnswers = 0;
var userName = prompt('Introduce yourself !');
alert('Welcome ' + userName + ' let\'s see how much do you know about me ')


var nameQuestion = prompt('Is my name Yazan? (Please answer Yes or No)').toLocaleLowerCase();
if (nameQuestion === 'yes') {
    alert('Bingo!');
    correctAnswers++
} else if (nameQuestion === 'no') {
    alert('You have no least idea about me');
} else {
    alert('Please answer within Yes or no, refresh page');
}

var jobQuestion = prompt('Am I a future javascript engineer? (Please answer Yes or No)').toLocaleLowerCase();
if (jobQuestion === 'yes') {
    alert('Good job, extra point!');
    correctAnswers++
} else if (jobQuestion === 'no') {
    alert('Nice try!');
} else {
    alert('Please answer within Yes or no, refresh page');
}

var powerQuestion = prompt('Is my special power I can Fly? (Please answer Yes or No)').toLocaleLowerCase();
if (powerQuestion === 'yes') {

    alert('Humans don\'t literally fly!, but they can make things fly');
} else if (powerQuestion === 'no') {
    alert('Common sense, correct!');
    correctAnswers++
} else {
    alert('Please answer within Yes or no, refresh page');
}

var favFoodQuestion = prompt('Do I love food so much ? (Please answer Yes or No)').toLocaleLowerCase();
if (favFoodQuestion === 'yes') {
    alert('Good job, extra point!');
    correctAnswers++
} else if (favFoodQuestion === 'no') {
    alert('Nice try');
} else {
    alert('Please answer within Yes or no, refresh page');
}

var placeQuestion = prompt('Do I live on Mars?(Please answer Yes or No)').toLocaleLowerCase();
if (placeQuestion === 'yes') {
    alert('Sadly no, you lose a point');
} else if (placeQuestion === 'no') {
    alert('Good job, extra point!');
    correctAnswers++
} else {
    alert('Please answer within Yes or no, refresh page');
}

// Question 6
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
alert('Correct answers within 1 - 100: ' + correctAnswersList);

// final message
alert("Nice to meet you " + userName + ' I hope you enjoy your time in our website');
alert('Your correct score is ' + correctAnswers + ' and total questions are 7');
