const inputText = document.querySelector('#texto-tarefa');
const buttonCreateJob = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

function changeColorJob() {
  list.addEventListener('click', function (event) {
    const li = event.target;
    const children = list.children;
    for (let i = 0; i < children.length; i += 1) {
      children[i].style.backgroundColor = '';
    }
    li.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

function completedJob() {
  list.addEventListener('dblclick', function (event) {
    const li = event.target;
    if (li.classList.contains('completed')) {
      li.classList.remove('completed');
    } else {
      li.classList.add('completed');
      // console.log(li.classList);
    }
  });
}

const buttonRemoveJob = document.querySelector('#apaga-tudo');

function removeJob() {
  buttonRemoveJob.addEventListener('click', function () {
    list.innerHTML = '';
    localStorage.clear();
  });
}

const buttonRemoveCompletedJob = document.querySelector('#remover-finalizados');

function removeCompletedJob() {
  buttonRemoveCompletedJob.addEventListener('click', function () {
    const li = document.getElementsByClassName('completed');
    for (let i = li.length - 1; i >= 0; i -= 1) {
      list.removeChild(li[i]);
    }
  });
}

const buttonSaveJob = document.querySelector('#salvar-tarefas');

function saveJob() {
  buttonSaveJob.addEventListener('click', function () {
    const li = document.querySelectorAll('.li');
    for (let i = li.length - 1; i >= 0; i -= 1) {
      const object = {
        text: li[i].innerText,
        classList: li[i].classList.contains('completed'),
      };

      const stringStorage = JSON.stringify(object);
      localStorage.setItem(i, stringStorage);
      // console.log(localStorage.getItem(i));
    }
  });
}

function clearInput() {
  inputText.value = '';
}

function createLi(valueLi, liClass) {
  const li = document.createElement('li');
  list.appendChild(li);
  li.classList.add('li', liClass);
  li.innerText = valueLi;
  clearInput();
  // console.log(li);
}

function updateList() {
  const localStorageLength = localStorage.length;

  for (let i = 0; i < localStorageLength; i += 1) {
    const objectStorage = JSON.parse(localStorage.getItem(i));
    if (objectStorage.classList === true) {
      createLi(objectStorage.text, 'completed');
    } else {
      createLi(objectStorage.text);
    }
  }
}

function createJob() {
  buttonCreateJob.addEventListener('click', function () {
    createLi(inputText.value);
  });
}

const buttonMoveUp = document.querySelector('#mover-cima');

function moveUp() {
  buttonMoveUp.addEventListener('click', function () {
    const li = document.getElementsByTagName('li');

    for (let i = 0; i < li.length; i += 1) {
      if (
        li[i].style.backgroundColor === 'rgb(128, 128, 128)' &&
        li[i].previousElementSibling !== null
      ) {
        list.insertBefore(li[i], li[i].previousElementSibling);
      }
    }
  });
}

const buttonMoveDown = document.querySelector('#mover-baixo');

function moveDown() {
  buttonMoveDown.addEventListener('click', function () {
    const li = document.getElementsByTagName('li');

    for (let i = 0; i < li.length; i += 1) {
      if (
        li[i].style.backgroundColor === 'rgb(128, 128, 128)' &&
        li[i].nextElementSibling !== null
      ) {
        list.insertBefore(li[i].nextElementSibling, li[i]);
        break;
      }
    }
  });
}

const buttonRemoveSelected = document.querySelector('#remover-selecionado');

function removeSelected() {
  buttonRemoveSelected.addEventListener('click', function () {
    const li = document.getElementsByTagName('li');
    for (let i = 0; i < li.length; i += 1) {
      if (li[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        list.removeChild(li[i]);
      }
    }
  });
}

window.onload = function () {
  updateList();
  createJob();
  changeColorJob();
  completedJob();
  removeJob();
  removeCompletedJob();
  saveJob();
  moveUp();
  moveDown();
  removeSelected();
};
