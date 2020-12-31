'use strict';
var counter = 0;
var userName = prompt('Introduce yourself !');
alert('Welcome ' + userName + ' let\'s see how much do you know about me ');

var nameQuestion = prompt('Is my name Yazan? (Please answer Yes or No)').toLocaleLowerCase();
answerFunction(nameQuestion);

var jobQuestion = prompt('Am I a future javascript engineer? (Please answer Yes or No)').toLocaleLowerCase();
answerFunction(jobQuestion);

var powerQuestion = prompt('Is my special power I can Fly? (Please answer Yes or No)').toLocaleLowerCase();
answerFunction(powerQuestion);

var favFoodQuestion = prompt('Do I love food so much ? (Please answer Yes or No)').toLocaleLowerCase();
answerFunction(favFoodQuestion);

var placeQuestion = prompt('Do I live on Mars?(Please answer Yes or No)').toLocaleLowerCase();
answerFunction(placeQuestion);

// Question 6 guess the number
for (var i = 0; i < 4; i++) {
    var userNumberGuess = Number(prompt('Guess my favourite movie number from 1 to 10 in the list, you have 4 chances'));
    if (userNumberGuess > 5) {
        alert('too high');
    } else if (userNumberGuess < 5) {
        alert('too low');
    } else if (userNumberGuess === 5) {
        alert('correct, it\'s Primal Fear');
        counter++
        break;
    } else {
        console.log('something wrong in my code');
    }
}

// question 7 multi correct answers
var correctAnswersList = [25, 29, 1, 33, 11, 55, 99];
loop1:
for (var j = 0; j < 6; j++) {
    var userAnswers = prompt('Guess one of correct answers from 1 to 100, you have 6 attempts');
    for (var i = 0; i < correctAnswersList.length; i++) {
        if (Number(userAnswers) === correctAnswersList[i]) {
            alert('You got the answer Correct');
            counter++
            break loop1;
        }
    }
}
alert('Correct answers are: ' + correctAnswersList);
alert('Your correct score is ' + counter + ' and total questions are 7');
alert("Nice to meet you " + userName + ' I hope you enjoy your time in our website');

function answerFunction(qustion) {
    if (qustion === 'yes') {
        alert('correct!');
        counter++
    } else if (qustion === 'no') {
        alert('not correct!');
    } else {
        alert('Please answer within Yes or no, refresh page');
    }
}