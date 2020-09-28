const numberColors = 6;
let count = 0;

function createBalls() {
  const colorsCircle = document.querySelector('#color-palete');
  for (let i = 0; i < numberColors; i += 1) {
    const div = document.createElement('div');
    div.classList.add('ball');
    colorsCircle.appendChild(div);
  }
}

function colorRandomBalls() {
  const balls = document.querySelectorAll('.ball');

  for (let i = 0; i < numberColors; i += 1) {
    const randomNumber = Math.round(Math.random() * 1000000);
    const randomColor = `#${randomNumber}`;

    balls[i].style.backgroundColor = randomColor;
    // console.log(balls[0])
  }
}

function myQuestion() {
  const question = document.querySelector('#rgb-color');

  const randomNumber1 = Math.round(Math.random() * 255);
  const randomNumber2 = Math.round(Math.random() * 255);
  const randomNumber3 = Math.round(Math.random() * 255);

  const numberQuestion = `(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
  question.innerText = numberQuestion;

  const balls = document.querySelectorAll('.ball');
  const randomNumber = Math.round(Math.random() * 5);

  balls[randomNumber].style.backgroundColor = `rgb${question.innerHTML}`;
  // console.log(randomNumber);
}

function message() {
  const answer = document.querySelector('#answer');
  const balls = document.querySelectorAll('.ball');
  const question = document.querySelector('#rgb-color');
  answer.innerText = 'Escolha uma cor';

  for (let i = 0; i < balls.length; i += 1) {
    balls[i].addEventListener('click', function (event) {
      const divBall = event.target;
      if (divBall.style.backgroundColor === `rgb${question.innerText}`) {
        answer.innerText = 'Acertou!';
      } else {
        answer.innerText = 'Errou! Tente novamente!';
      }
      // console.log(divBall);
    });
  }
  // console.log(balls[0]);
}

function newScorePoints() {
  const scorePoints = document.querySelector('#score');
  const answer = document.querySelector('#answer');
  if (answer.innerText === 'Acertou!') {
    count += 3;
    scorePoints.innerText = `Placar: ${count}`;
  }
}

function score() {
  const scorePoints = document.querySelector('#score');
  const balls = document.querySelectorAll('.ball');

  scorePoints.innerText = `Placar: ${count}`;

  for (let i = 0; i < balls.length; i += 1) {
    balls[i].addEventListener('click', newScorePoints);
  }
}

function buttonReset() {
  const myButtonReset = document.querySelector('#reset-game');
  myButtonReset.addEventListener('click', function () {
    colorRandomBalls();
    myQuestion();
    message();
  });
}

function executeAll() {
  createBalls();
  colorRandomBalls();
  myQuestion();
  message();
  score();
  buttonReset();
}

window.onload = function () {
  executeAll();
};
