'use strict';

// ask user for his/her name
var userName = prompt('Introduce yourself !');
alert('Welcome ' + userName + ' let\'s see how much do you know about me ')

// ask user 5 questions about me and convert it to lower case
var nameQuestion = prompt('Is my name Yazan? (Please answer Yes or No)').toLocaleLowerCase();
var jobQuestion = prompt('Am I a future javascript engineer? (Please answer Yes or No)').toLocaleLowerCase();
var powerQuestion = prompt('Is my special power I can Fly? (Please answer Yes or No)').toLocaleLowerCase();
var favFoodQuestion = prompt('Do I love food so much ? (Please answer Yes or No)').toLocaleLowerCase();
var placeQuestion = prompt('Do I live on Mars?(Please answer Yes or No)').toLocaleLowerCase();


if (nameQuestion === 'yes') {     // responde to user my name question answer
    // console.log('Bingo!');
    alert('Bingo!');
} else if (nameQuestion === 'no') {
    // console.log('You have no least idea about me');
    alert('You have no least idea about me');
} else {
    // console.log('Please answer within Yes or no, refresh page');
    alert('Please answer within Yes or no, refresh page');
}


if (jobQuestion === 'yes') {      // responde to user my job question answer
    // console.log('Good job, extra point!');
    alert('Good job, extra point!');
} else if (jobQuestion === 'no') {
    // console.log('Nice try!');
    alert('Nice try!');
} else {
    // console.log('Please answer within Yes or no, refresh page');
    alert('Please answer within Yes or no, refresh page');
}


if (powerQuestion === 'yes') {      // responde to user my power question answer
    console.log('Humans don\'t literally fly!, but they can make things fly');
    alert('Humans don\'t literally fly!, but they can make things fly');
} else if (powerQuestion === 'no') {
    // console.log('Common sense, correct!');
    alert('Common sense, correct!');
} else {
    // console.log('Please answer within Yes or no, refresh page');
    alert('Please answer within Yes or no, refresh page');
}


if (favFoodQuestion === 'yes') {     // responde to user my name food answert
    // console.log('Good job, extra point!');
    alert('Good job, extra point!');
} else if (favFoodQuestion === 'no') {
    // console.log('Nice try');
    alert('Nice try');
} else {
    // console.log('Please answer within Yes or no, refresh page');
    alert('Please answer within Yes or no, refresh page');
}


if (placeQuestion === 'yes') {      // responde to user my home place question answer
    // console.log('Sadly no, you lose a point');
    alert('Sadly no, you lose a point');
} else if (placeQuestion === 'no') {
    // console.log('Good job, extra point!');
    alert('Good job, extra point!');
} else {
    // console.log('Please answer within Yes or no, refresh page');
    alert('Please answer within Yes or no, refresh page');
}

// final message
alert("Nice to meet you " + userName + ' I hope you enjoy your time in our website');