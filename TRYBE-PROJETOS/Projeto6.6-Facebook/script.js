function alertLogin() {
  const buttonForm = document.querySelector('#button-login');
  const loginInput = document.querySelector('#user-email-phone');

  buttonForm.addEventListener('click', function () {
    alert(loginInput.value);
  });
}

const newInformationUser = () => {
  const rightContainer = document.querySelector('.right-content');
  const name = document.querySelector('.name');
  const lastname = document.querySelector('.lastname');
  const phone = document.querySelector('.phoneEmail');
  const birthdate = document.querySelector('.birthdate');
  const newMemberContainer = document.createElement('div');
  const paragraphy = document.createElement('p');

  let gender = document.querySelector('input[name="gender"]:checked');
  if (gender.value === 'Personalizado') {
    gender = document.querySelector('input[name="gender-custom"]');
  }
  paragraphy.innerText = `Olá, ${name.value} ${lastname.value}<br>
    ${phone.value}<br>
    ${birthdate.value}<br>
    ${gender.value}`;
  newMemberContainer.appendChild(paragraphy);

  rightContainer.innerHTML = paragraphy.innerText;
};

function registerAlert() {
  const rightContentInputs = document
    .querySelector('#sign-up-container')
    .querySelectorAll('input');
  const buttonRegister = document.querySelector('#facebook-register');
  buttonRegister.addEventListener('click', function (event) {
    event.preventDefault();
    let refimputcheck = 0;
    rightContentInputs.forEach((item) => {
      const requiredContainer = document.querySelector('.required-alert');

      item.required = 'required';
      if (item.value === '') {
        requiredContainer.innerText = 'Campos inválidos';
      } else {
        refimputcheck += 1;
      }
    });
    if (refimputcheck >= 8) {
      newInformationUser();
    }
  });
}

function createInputGender() {
  const genderOptions = document.querySelector('#other');
  const genderContainer = document.querySelector('.gender-container');

  genderOptions.addEventListener('click', function () {
    const divOtherGender = document.createElement('div');
    const inputOtherGender = document.createElement('input');

    inputOtherGender.required = 'required';
    inputOtherGender.placeholder = 'Gênero (opcional)';
    inputOtherGender.name = 'gender-custom';

    if (genderContainer.children.length === 3) {
      genderContainer.removeChild(genderContainer.lastChild);
    }

    divOtherGender.appendChild(inputOtherGender);
    genderContainer.appendChild(divOtherGender);
  });
}

window.onload = function () {
  alertLogin();
  createInputGender();
  registerAlert();
};
