// MY CONSTANTS
const containerMeme = document.querySelector('#meme-image-container');
const img = document.querySelector('#meme-image');
const loadImg = document.querySelector('#meme-insert');
const textInput = document.querySelector('#text-input');
const loadText = document.querySelector('#meme-text');
const buttonRed = document.querySelector('#fire');
const buttonBlue = document.querySelector('#water');
const buttonBrown = document.querySelector('#earth');
const borders = document.querySelector('.borders');
const buttonsMoveText = document.querySelector('.button-move-container');
let showContainer = false;

function displayContainer() {
  if (showContainer === false) {
    containerMeme.style.display = 'none';
    borders.style.display = 'none';
    buttonsMoveText.style.display = 'none';
  } else {
    containerMeme.style.display = 'flex';
    borders.style.display = 'flex';
    buttonsMoveText.style.display = 'flex';
  }
}
displayContainer();

// EVENT TO SELECT A IMAGE IN MY CONTAINER
function selectImg(event) {
  img.src = URL.createObjectURL(event.target.files[0]);
  showContainer = true;
  displayContainer();
}
loadImg.addEventListener('change', selectImg);

// EVENT TO ADD TEXT IN MY CONTAINER
function addText() {
  loadText.innerText = textInput.value;
}
textInput.addEventListener('keyup', addText);

// EVENT IN THE BUTTONS BORDERS
function changeBorderFire() {
  if (loadText.style.color === 'red') {
    containerMeme.style.border = '1px solid white';
    loadText.style.color = 'white';
  } else {
    containerMeme.style.border = '5px dashed red';
    loadText.style.color = 'red';
  }
}
buttonRed.addEventListener('click', changeBorderFire);

function changeBorderWater() {
  if (loadText.style.color === 'blue') {
    containerMeme.style.border = '1px solid white';
    loadText.style.color = 'white';
  } else {
    containerMeme.style.border = '15px double blue';
    loadText.style.color = 'blue';
  }
}
buttonBlue.addEventListener('click', changeBorderWater);

function changeBorderEarh() {
  if (loadText.style.color === 'green') {
    containerMeme.style.border = '1px solid white';
    loadText.style.color = 'white';
  } else {
    containerMeme.style.border = '12px groove green';
    loadText.style.color = 'green';
  }
}
buttonBrown.addEventListener('click', changeBorderEarh);

// FUNCTION FOR PRE-IMAGES
const preImgs = document.querySelectorAll('.miniatureImg');

for (let i = 0; i < preImgs.length; i += 1) {
  preImgs[i].addEventListener('click', function () {
    document.body.style.backgroundSize = '125%';
    document.body.style.backgroundPositionX = '20%';
    img.src = preImgs[i].src;
    showContainer = true;
    displayContainer();
  });
}

function moveText() {
  const arrowUp = document.querySelector('.up');
  const arrowRight = document.querySelector('.right');
  const arrowDown = document.querySelector('.down');
  const arrowLeft = document.querySelector('.left');

  loadText.style.bottom = '0px';
  loadText.style.left = '0px';

  arrowUp.addEventListener('click', () => {
    let position = parseInt(loadText.style.bottom);

    if (position >= 230) {
      loadText.style.bottom = '230px';
    } else {
      loadText.style.bottom = position + 10 + 'px';
    }
    // console.log(position);
  });

  arrowRight.addEventListener('click', () => {
    let position = parseInt(loadText.style.left);

    if (position >= 160) {
      loadText.style.left = '160px';
    } else {
      loadText.style.left = position + 10 + 'px';
    }
    // console.log(position);
  });

  arrowDown.addEventListener('click', () => {
    let position = parseInt(loadText.style.bottom);

    if (position === 0) {
      loadText.style.bottom = '0px';
    } else {
      loadText.style.bottom = position - 10 + 'px';
    }
    // console.log(position);
  });

  arrowLeft.addEventListener('click', () => {
    let position = parseInt(loadText.style.left);

    if (position === 0) {
      loadText.style.left = '0px';
    } else {
      loadText.style.left = position - 10 + 'px';
    }
    console.log(position);
  });
}
moveText();
