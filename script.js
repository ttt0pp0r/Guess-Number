'use strict';

/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = 'Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  //No input

  if (!guess) {
    // document.querySelector(`.message`).textContent = 'No Number!!!';
    displayMessage('No Number');

    //Player Wins
  } else if (guess === secretNumber) {
    // document.querySelector(`.message`).textContent = 'You got it!!!';
    displayMessage('You got it!!!');
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Too Low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(`.message`).textContent =
      //   guess > secretNumber ? 'Too hight!!!' : 'Too low!!!';
      displayMessage(
        (document.querySelector(`.message`).textContent =
          guess > secretNumber ? 'Too hight!!!' : 'Too low!!!')
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector(`.message`).textContent = 'You lost!!!';
      displayMessage('You lost');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector(`.number`).textContent = secretNumber;
    }
  }

  //   else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = 'Too low!!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector(`.message`).textContent = 'You lost!!!';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#ff0000';
  //     document.querySelector('.number').style.width = '30rem';
  //     document.querySelector(`.number`).textContent = secretNumber;
  //   }
  //   //Too high!!
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = 'Too high!!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector(`.message`).textContent = 'You lost!!!';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#ff0000';
  //     document.querySelector('.number').style.width = '30rem';
  //     document.querySelector(`.number`).textContent = secretNumber;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  //document.querySelector(`.message`).textContent = 'Start guessing...';\
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector(`.number`).textContent = '?';
  document.querySelector('.guess').value = '';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
