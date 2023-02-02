'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

console.log(secretNumber)

document.querySelector('.check')
    .addEventListener('click', function () {
        const guess = Number(document.querySelector('.guess').value);

        if (!guess) {
            document.querySelector('.message').textContent = 'No number';

        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = 'Correct number';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem'
            document.querySelector('.number').textContent = secretNumber;
            if (highScore < score) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too High!';
                score--;
                document.querySelector('.score').textContent = score;
                score;
            } else {
                document.querySelector('.message').textContent = 'You lost the Game';
                document.querySelector('.score').textContent = 0;
            }
        } else if (guess < secretNumber) {
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
            score;
        }
    });

document.querySelector('.again').addEventListener('click', () => {
    console.log('test finished');
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';


})